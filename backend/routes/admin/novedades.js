var express = require('express');
var router = express.Router();
var consulta = require('../../models/consultas');

router.get('/', async function (req, res, next) {

    if (req.session.id_usuario == undefined) {

        res.redirect('/admin/login');

    } else {

        var novedades = await consulta.buscarNovedades();

        res.render('./admin/novedades',{layout: './admin/layout', mensaje: req.session.id_usuario, novedades});

        //console.log(req.session == undefined)

    }        

})

module.exports = router;