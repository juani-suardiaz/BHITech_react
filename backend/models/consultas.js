//require('dotenv').config();
var pool = require('./bd');

async function buscarUsuario (usuario) {

    var consulta = 'SELECT * FROM usuarios WHERE nombre_usuario = ?';

    var resultado = await pool.query(consulta,[usuario]);

    return resultado[0];

}

async function traerNovedades () {

    var consulta = "SELECT id_novedad, titulo, subtitulo, contenido, CONCAT(DAY(fecha),'/',MONTH(fecha),'/',YEAR(fecha)) AS fecha FROM novedades ORDER BY id_novedad DESC;";

    var resultado = await pool.query(consulta);

    return resultado;
}

async function insertarNovedad (registro) {

    var consulta = 'INSERT INTO novedades SET ?';

    await pool.query(consulta, [registro]);
}

async function buscarNovedad (id) {

    var consulta = 'SELECT * FROM novedades WHERE id_novedad = ?';

    var resultado = await pool.query(consulta,[id]);

    return resultado[0];
}

async function modificarNovedad (registro) {

    var consulta = 'UPDATE novedades SET titulo = ?, subtitulo = ?, contenido = ? WHERE id_novedad = ?;';

    await pool.query(consulta, [registro.titulo, registro.subtitulo, registro.contenido, registro.id_novedad]);
}

module.exports = {buscarUsuario, traerNovedades, insertarNovedad, buscarNovedad, modificarNovedad};