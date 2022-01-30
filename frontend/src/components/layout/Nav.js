import React from 'react';
import {NavLink} from 'react-router-dom';
import "../../styles/components/layout/Nav.css";

function Nav () {

    return (

        <nav>
            <div class="holder">
                <ul>
                    <li><NavLink to="/">Inicio</NavLink></li>
                    <li><NavLink to="/institucion">La Institución</NavLink></li>
                    <li><NavLink to="/carreras">Carreras</NavLink></li>
                    <li><NavLink to="/alumnos">Alumnos</NavLink></li>
                    <li><NavLink to="/novedades">Novedades</NavLink></li>
                    <li><NavLink to="/contacto">Contacto</NavLink></li>
                </ul>
            </div>
        </nav>

    )

}

export default Nav;