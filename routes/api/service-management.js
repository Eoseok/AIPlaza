let express = require('express');
let router = express.Router();
const dbo = require('../database/conn');
const fs = require('fs-extra')
let fs_ = require('fs')

// Temp for mail
let email = require('../../modules/mail')

router.post('/services/run', (req,res) => {
    // Save request data into json file
    let serviceId = req.body.serviceId
    let userId = req.body.userId
    let rspUrl = req.body.rspUrl
    let serviceVariables = JSON.stringify(req.body)
    let variableJsonName = `${serviceId}` + '_' + `${userId}` + '_variables.json'
    // Temp Codes
    const masterPath = process.env.MASTER_PATH
    variableJsonName = masterPath + variableJsonName
    //
    fs_.writeFileSync(variableJsonName,serviceVariables)

    // TODO 1: Run Service using service name and json file
    // TODO 2: Save result structure into databse and send email when email notice is true

    // Temp Code : Send email
    let emailNotice = req.body.emailNotice
    let emailAddress = req.body.emailAddress
    if  (emailNotice == true) {
        email.sendEmail(emailAddress)
    }

    /*
        Save result format in database
        - Two cases,
        - Temporary use 'var' for test
     */
    if  ((Math.ceil(Math.random()*10)%2) == 1) {
        // Result_1.json
        var resultExample = {
            "title": "진단결과",
            "paragraph_style": [
                {
                "titleFont": "Arial",
                "headerFontSize": 12,
                }
            ],
            "paragraph": [
                {
                    "subtitle": "영상결과",
                    "medeia": "example1_result.png",
                    "notes": "전두엽은 기억에 중요한 부분입니다.",
                },
                {
                    "subtitle": "최종진단",
                    "header": "당신의 뇌 진단 결과상 치매의 위험이 높습니다.",
                    "media": "undefined",
                    "notes": "이 질환은 속히 병원을 찾으셔야 합니다",
                }
            ],
            "backgroundColor": "#DEE8D5",
            "options": {
                "navigation": true
            }
        }
        // console.log('Odd number')
    } else {
        // Result_2.json
        var resultExample = {
            "title": "진단결과",
            "paragraphStyle": [
                {
                    "titleFont": "Arial",
                    "headerFontSize": 14
                }],
            "paragraph": [
                {
                    "subtitle": "음성결과",
                    "medeia": "example2_result.png",
                    "notes": "청각 검사 결과 정상입니다."
                },
                {
                    "subtitle": "최종진단",
                    "header": "당신의 귀는 정상입니다.",
                    "media": "test.nii",
                    "notes": "건강한 귀 입니다."
                },
                {
                    "subtitle": "건강관리정보",
                    "header": "건강한 귀를 유지하기 위한 방법",
                    "media": "example2_info.png",
                    "notes": "위 정보로 건강한 귀를 관리하세요"
                }
            ],
            "background": "#D5C8BC",
            "options": {
                "navigation": false
            }
        }
        // console.log('Even number')
    }

    let resBody = {
        "serviceId" : serviceId,
        "userId" : userId,
        "rspUrl" : rspUrl,
        "result" : resultExample
    }

    res.json(resBody)
} )




module.exports = router;