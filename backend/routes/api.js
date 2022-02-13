var express = require('express');
var router = express.Router();
var consulta = require('../models/consultas');

router.get('/novedades', async function (req, res, next) {

    var resultado = await consulta.traerNovedades();
    
    res.json(resultado);

})

module.exports = router;