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
    
            var registro = {
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
        res.render('./admin/cargar',{layout: './admin/layout', mensaje: "USUARIO: " + req.session.nombre_usuario, mensajeError: "--no se pudo cargar la novedad--", novedad: registro});

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

    try {

        if (req.session.id_usuario == undefined) {

            res.redirect('/admin/login');
    
        } else {
    
            var registro = {            
                titulo: req.body.tituloNovedad,
                subtitulo: req.body.subtituloNovedad,
                contenido: req.body.contenidoNovedad,
                id_novedad: req.params.id
            }
    
            await consulta.modificarNovedad(registro);
    
            res.redirect('/admin/novedades');
    
            //console.log(req.session == undefined)
    
        }        

    } catch(error) {

        console.log(error);
        res.render('./admin/modificar',{layout: './admin/layout', mensaje: "USUARIO: " + req.session.nombre_usuario, mensajeError: "--no se pudo modificar la novedad--", novedad: registro});

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

    try {

        if (req.session.id_usuario == undefined) {

            res.redirect('/admin/login');
    
        } else {
    
            var num_novedad = req.params.id;
    
            await consulta.eliminarNovedad(num_novedad);
    
            res.redirect('/admin/novedades');
    
            //console.log(req.session == undefined)
    
        }        

    } catch(error) {

        // se carga el registro para cargar de vuelta el formulario
        
        var registro = {            
            titulo: req.body.tituloNovedad,
            subtitulo: req.body.subtituloNovedad,
            contenido: req.body.contenidoNovedad,
            id_novedad: req.params.id,
            fecha: req.body.fechaNovedad
        }        

        console.log(error);
        //console.log(registro);
        res.render('./admin/eliminar',{layout: './admin/layout', mensaje: "USUARIO: " + req.session.nombre_usuario, mensajeError: "--no se pudo eliminar la novedad--", novedad: registro});

    }

})

//

module.exports = router;