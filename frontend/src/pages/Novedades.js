import React from 'react';
import "../styles/components/pages/Novedades.css"

import {useState, useEffect} from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';

function Novedades () {

    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(function () {
        
        async function cargarNovedades() {

            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        
        }

        cargarNovedades();
       
    }, []);

    return (

        <main>

            <div class="holder">

                <h1>#Tablón_de_novedades</h1>

                {loading ? (
                    <p>cargando...</p>
                ):(
                    novedades.map(function (item) {
                        return <NovedadItem id={item.id} titulo={item.titulo} subtitulo={item.subtitulo} contenido={item.contenido} fecha={item.fecha}/>
                    })
                )}

            </div>

        </main>

    )

}

export default Novedades;