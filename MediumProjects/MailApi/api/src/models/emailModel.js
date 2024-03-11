const nodemailer = require('nodemailer');

class EmailModel{
    static enviarEmail({titulo, corpo, destinatario}, callback){
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth:{
                user:process.env.EMAIL_USER,
                pass:process.env.EMAIL_PASS,
            },
        });


        const mailOption = {
            from: process.env.EMAIL_USER,
            to: destinatario,
            subject: titulo,
            text: corpo,
        };

        transporter.sendMail(mailOption, callback);
    }
}

module.exports = EmailModel;