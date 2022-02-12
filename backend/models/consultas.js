var pool = require('./bd');

async function buscarUsuario (usuario) {

    try {

        var consulta = 'SELECT * FROM usuarios WHERE nombre_usuario = ?';

        var resultado = await pool.query(consulta,[usuario]);
    
        return resultado[0];        

    } catch(error) {

        throw error;

    }

}

async function traerNovedades () {

    var consulta = "SELECT id_novedad, titulo, subtitulo, contenido, CONCAT(DAY(fecha),'/',MONTH(fecha),'/',YEAR(fecha)) AS fecha FROM novedades ORDER BY id_novedad DESC;";

    var resultado = await pool.query(consulta);

    return resultado;
}

async function insertarNovedad (registro) {

    try {

        var consulta = 'INSERT INTO novedades SET ?';

        await pool.query(consulta, [registro]);        

    } catch(error) {

        throw error;

    }    

}

async function buscarNovedad (id) {

    var consulta = "SELECT id_novedad, titulo, subtitulo, contenido, CONCAT(DAY(fecha),'/',MONTH(fecha),'/',YEAR(fecha)) AS fecha FROM novedades WHERE id_novedad = ?;"

    var resultado = await pool.query(consulta,[id]);

    return resultado[0];
}

async function modificarNovedad (registro) {

    try {

        var consulta = 'UPDATE novedades SET titulo = ?, subtitulo = ?, contenido = ? WHERE id_novedad = ?;';

        await pool.query(consulta, [registro.titulo, registro.subtitulo, registro.contenido, registro.id_novedad]);

    } catch(error) {

        throw error;

    }    

}

async function eliminarNovedad (id) {

    try {

        var consulta = 'DELETE FROM novedades WHERE id_novedad = ?';

        await pool.query(consulta,[id]);        

    } catch(error) {

        throw error;

    }

}

module.exports = {buscarUsuario, traerNovedades, insertarNovedad, buscarNovedad, modificarNovedad, eliminarNovedad};