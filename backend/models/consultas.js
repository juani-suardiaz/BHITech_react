require('dotenv').config();
var pool = require('./bd');

async function buscarUsuario (usuario, password) {

    var consulta = 'SELECT * FROM usuarios WHERE nombre_usuario = ? AND password = ?';

    var resultado = await pool.query(consulta,[usuario, password]);

    return resultado[0];

}

module.exports = {buscarUsuario};