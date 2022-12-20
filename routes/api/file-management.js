let express = require('express');
let router = express.Router();
// const db = require('../database/conn');
const fs = require('fs-extra')
let fs_ = require('fs')

router.post('/newFile', (req,res) => {
    let serviceId = req.body.serviceId
    let userId = req.body.userId
    let fileName = req.body.fileName

    let fileURL = {
        "url": `${serviceId}` + '_' + `${userId}` + '_' + `${fileName}`
    }

    // TODO : Organize data structure using env path, and save
    // Organize data structure
    // req.busboy.on('file', (file, filename) => {
    //     if (process.env.MODE == 'remote') {
    //         masterPath = process.env.MASTER_PATH
    //     }
    // })

    res.json(fileURL)
})

// TODO : Get uploaded file router

module.exports = router;