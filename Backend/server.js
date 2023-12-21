const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const Handlebars = require('handlebars');
const fs = require('fs');
const port = process.env.PORT || 7002;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
const smtpServer = 'smtp.titan.email';
const smtpPort = 587;

// IMAP (receiving) server details
const imapServer = 'imap.titan.email';
const imapPort = 993;
app.post('/send-email', (req, res) => {
    const { name, email, phone, message } = req.body;
    try {
        const replacements = req.body
        const transporter = nodemailer.createTransport({
            host: smtpServer,
            port: smtpPort,
            secure: false,
            auth: {
                user: "support@innovasolutions.pk",
                pass: 'inno678##',
            },
        });
        //
        // Define a route to handle form submissions

        const readHTMLFile = function (path, callback) {
            fs.readFile(path, { encoding: 'utf-8' }, (err, html) => {
                if (err) {
                    throw err;
                    callback(err);
                } else {
                    callback(null, html);
                }
            });
        };
        console.log("i m running")
        readHTMLFile('./html/email.html', function (err, html) {
            var template = Handlebars.compile(html);
            const htmlToSend = template(replacements);
            var mailOptions = {
                from: 'support@innovasolutions.pk',
                to: 'support@innovasolutions.pk',
                subject: "Customer Message",
                html: htmlToSend
            }
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error.message)
                } else {
                    return res.status(200).json('mail has been sent')
                    console.log("email came" + info.messageId)
                    return res.status(400).json({ error: error.message })
                }
            })
        })
    } catch (e) {
        console.log(e)
    }
})



// var readHTMLFile= function(path,callback){
// fs.readFile(path,{encoding:"utf-8"},(err,html)=>{
// if (err){
//     throw err;
//     callback(err)
// }else{
//     callback(null,html)
// }
// })
// }

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
