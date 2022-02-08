var express = require('express');
const session = require('express-session');
var router = express.Router();
var consulta = require('../../models/consultas');

router.get('/', async function (req, res, next) {

    if (req.session.id_usuario == undefined) {

        res.redirect('/admin/login');

    } else {

        var novedades = await consulta.buscarNovedades();

        var tablaVacia = (novedades[0] == undefined);

        res.render('./admin/novedades',{layout: './admin/layout', mensaje: "Bienvenido " + req.session.nombre_usuario, novedades, tablaVacia});

        //console.log(req.session == undefined)

    }        

})

router.get('/cargar', async function (req, res, next) {

    if (req.session.id_usuario == undefined) {

        res.redirect('/admin/login');

    } else {

        res.render('./admin/cargar',{layout: './admin/layout', mensaje: "Bienvenido " + req.session.nombre_usuario});

        //console.log(req.session == undefined)

    } 

})

router.post('/cargar', async function (req, res, next) {

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

        await consulta.cargarNovedad(registro);

        var novedades = await consulta.buscarNovedades();

        res.render('./admin/novedades',{layout: './admin/layout', mensaje: "Bienvenido " + req.session.nombre_usuario, novedades, tablaVacia: false});

        //console.log(req.session == undefined)

    }        

})

module.exports = router;