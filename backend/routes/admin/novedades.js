var express = require('express');
var router = express.Router();
var consulta = require('../../models/consultas');

router.get('/', async function (req, res, next) {

    if (req.session.id_usuario == undefined) {

        res.redirect('/admin/login');

    } else {

        var novedades = await consulta.traerNovedades();

        var tablaVacia = (novedades[0] == undefined);

        res.render('./admin/novedades',{layout: './admin/layout', mensaje: "USUARIO: " + req.session.nombre_usuario, novedades, tablaVacia});

        //console.log(req.session == undefined)

    }        

})

router.get('/cargar', async function (req, res, next) {

    if (req.session.id_usuario == undefined) {

        res.redirect('/admin/login');

    } else {

        res.render('./admin/cargar',{layout: './admin/layout', mensaje: "USUARIO: " + req.session.nombre_usuario});

        //console.log(req.session == undefined)

    } 

})

router.post('/cargar', async function (req, res, next) {

    try {

        if (req.session.id_usuario == undefined) {

            res.redirect('/admin/login');
    
        } else {
    
            var fechaNovedad = new Date;
            var anio = fechaNovedad.getFullYear();
            var mes = fechaNovedad.getMonth() + 1;
            var dia = fechaNovedad.getDate();
    
            const registro = {
                id_novedad: null,
                titulo: req.body.tituloNovedad,
                subtitulo: req.body.subtituloNovedad,
                contenido: req.body.contenidoNovedad,
                fecha: anio + '-' + mes + '-' + dia
            }
    
            await consulta.insertarNovedad(registro);
    
            res.redirect('/admin/novedades');
    
            //console.log(req.session == undefined)
    
        }        

    } catch(error) {

        console.log(error);
        res.render('./admin/cargar',{layout: './admin/layout', mensaje: "USUARIO: " + req.session.nombre_usuario, mensajeError: "--no se pudo cargar la novedad--"});

    }

})

router.get('/modificar/:id', async function (req, res, next) {

    if (req.session.id_usuario == undefined) {

        res.redirect('/admin/login');

    } else {

        var num_novedad = req.params.id;

        var novedad = await consulta.buscarNovedad(num_novedad);

        res.render('./admin/modificar',{layout: './admin/layout', mensaje: "USUARIO: " + req.session.nombre_usuario, novedad});

        //console.log(req.session == undefined)

    } 

})

router.post('/modificar/:id', async function (req, res, next) {

    if (req.session.id_usuario == undefined) {

        res.redirect('/admin/login');

    } else {

        const registro = {            
            titulo: req.body.tituloNovedad,
            subtitulo: req.body.subtituloNovedad,
            contenido: req.body.contenidoNovedad,
            id_novedad: req.params.id
        }

        await consulta.modificarNovedad(registro);

        res.redirect('/admin/novedades');

        //console.log(req.session == undefined)

    }        

})

router.get('/eliminar/:id', async function (req, res, next) {

    if (req.session.id_usuario == undefined) {

        res.redirect('/admin/login');

    } else {

        var num_novedad = req.params.id;

        var novedad = await consulta.buscarNovedad(num_novedad);

        res.render('./admin/eliminar',{layout: './admin/layout', mensaje: "USUARIO: " + req.session.nombre_usuario, novedad});

        //console.log(req.session == undefined)

    } 

})

//

router.post('/eliminar/:id', async function (req, res, next) {

    if (req.session.id_usuario == undefined) {

        res.redirect('/admin/login');

    } else {

        var num_novedad = req.params.id;

        await consulta.eliminarNovedad(num_novedad);

        res.redirect('/admin/novedades');

        //console.log(req.session == undefined)

    }        

})

//

module.exports = router;