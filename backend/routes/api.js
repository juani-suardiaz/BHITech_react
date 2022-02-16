var express = require('express');
var router = express.Router();
var consulta = require('../models/consultas');
var nodemailer = require('nodemailer');

router.get('/novedades', async function (req, res, next) {

    var resultado = await consulta.traerNovedades();

    res.json(resultado);

})

router.post('/contacto', async function (req, res, next) {

    const mail = {
        to: 'diazsuar@gmail.com',
        subject: 'Contacto Web',
        html: req.body.nombre + ' ' + req.body.apellido + ' se contactó a través de la web y quiere más información a este correo: ' + req.body.email + '<br> Además, hizo el siguiente comentario: ' + req.body.mensaje
    };

    const transport = nodemailer.createTransport ({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    })

    await transport.sendMail(mail);

    res.status(201).json({
        error: false,
        message: 'Mensaje enviado'
    })

})

module.exports = router;