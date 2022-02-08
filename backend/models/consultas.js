//require('dotenv').config();
var pool = require('./bd');

async function buscarUsuario (usuario) {

    var consulta = 'SELECT * FROM usuarios WHERE nombre_usuario = ?';

    var resultado = await pool.query(consulta,[usuario]);

    return resultado[0];

}

async function buscarNovedades () {

    var consulta = 'SELECT * FROM novedades';

    var resultado = await pool.query(consulta);

    return resultado;
}

async function cargarNovedad (registro) {

    var consulta = 'INSERT INTO novedades SET ?';

    await pool.query(consulta, [registro]);
}

module.exports = {buscarUsuario, buscarNovedades, cargarNovedad};