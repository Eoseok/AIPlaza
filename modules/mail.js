const db = require('../routes/database/conn');
let EmailOptions = require('./EmailOptions')
const nodemailer = require("nodemailer");
let smtpTransport = require('nodemailer-smtp-transport');
let moment =require('moment')

module.exports.sendEmail = (emailAddress) => {
    const now = moment().locale('ko').format('MM월 DD일 HH시 mm분')
    const transporter = nodemailer.createTransport((smtpTransport({
        service: 'gmail',
        port: 587,
        host: 'smtp.gmail.com',
        auth: {
            user: process.env.email,
            pass: process.env.emailPW
        }
    })))
    const info = {
        email: emailAddress,
        date: now,
    }

    let mailOptions = EmailOptions.JoinmailOptions(info);
    transporter.sendMail(mailOptions, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.date + ' ' + info.email);
        }
    })
}