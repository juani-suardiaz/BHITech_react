var express = require('express');
var router = express.Router();
var consulta = require('../../models/consultas');
var md5 = require('md5');

router.get('/', function (req, res, next) {

    if (req.session.id_usuario == undefined) {

        res.render('./admin/login',{layout: './admin/layout'});

    } else {

        res.redirect('/admin/novedades');

    }    

})

router.get('/logout', function (req, res, next) {

    if (req.session.id_usuario != undefined) {
        
        req.session.destroy();
        
    }
    
    res.redirect('/admin/login');

})

router.post('/', async function(req, res, next){

    try {

        var data = await consulta.buscarUsuario(req.body.usuario);

        if (data == undefined) {
    
            res.render('admin/login',{layout: './admin/layout', mensaje: 'El usuario no existe'})
    
        } else {
    
            if (data.password != md5(req.body.password)) {
    
                res.render('admin/login',{layout: './admin/layout', mensaje: 'La contraseña ingresada es incorrecta'})
    
            } else {
    
                req.session.id_usuario = data.id_usuario;
                req.session.nombre_usuario = data.nombre_usuario;
    
                res.redirect('/admin/novedades');
    
            }
    
        }        

    } catch (error) {

        console.log(error);

    }

})

module.exports = router;