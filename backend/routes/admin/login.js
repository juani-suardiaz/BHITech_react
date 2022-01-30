var express = require('express');
var router = express.Router();
var consulta = require('../../models/consultas');

router.get('/', function (req, res, next) {

    if (req.session.id_usuario == undefined) {

        res.render('./admin/login',{layout: './admin/layout'});

    } else {

        res.redirect('/admin/panel');

    }    

})

router.get('/logout', function (req, res, next) {

    if (req.session.id_usuario != undefined) {
        
        req.session.destroy();
        
    }
    
    res.redirect('/admin/login');

})

router.post('/', async function(req, res, next){

    var data = await consulta.buscarUsuario(req.body.usuario, req.body.password);

    if (data == undefined) {

        res.render('admin/login',{layout: './admin/layout', mensaje: 'usuario y password incorrectos'})

    } else {

        req.session.id_usuario = data.id_usuario

        res.redirect('/admin/panel');

    }

})

module.exports = router;