var express = require('express');
var router = express.Router();
//var consulta = require('../../models/consultas');

router.get('/', function (req, res, next) {

    if (req.session.id_usuario == undefined) {

        res.redirect('/admin/login');

    } else {

        res.render('./admin/panel',{layout: './admin/layout', mensaje: req.session.id_usuario});

    }        

})

module.exports = router;