const express = require('express');
const EmailController = require('../controllers/emailController');

const router = express.Router();

router.post('/enviar-email', EmailController.enviarEmail);

module.exports = router;