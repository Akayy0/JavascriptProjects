const EmailModel = require('../models/emailModel');

class EmailController {
    static enviarEmail(req, res) {
        const { titulo, corpo, destinatario } = req.body;

        if (!titulo || !corpo || !destinatario) {
            return res.status(400).json({ mensagem: 'Parâmetros inválidos. Certifique-se de fornecer título, corpo e destinatário.' });
        }

        EmailModel.enviarEmail({ titulo, corpo, destinatario }, (error, info) => {
            if (error) {
                console.error(error);
                return res.status(500).json({ mensagem: 'Erro ao enviar o e-mail.' });
            } else {
                console.log('Email enviado: ' + info.response);
                return res.json({ mensagem: 'E-mail enviado com sucesso!' });
            }
        });
    }
}



module.exports = EmailController;