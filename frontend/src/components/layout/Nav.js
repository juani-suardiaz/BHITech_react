import React from 'react';
import {NavLink} from 'react-router-dom';
import "../../styles/components/layout/Nav.css";

function Nav () {

    return (

        <nav>
            <div className="holder">
                <ul>
                    <li><NavLink to="/" className={function ({isActive}) { return (isActive ? "activo" : 'none') } }>Inicio</NavLink></li>
                    <li><NavLink to="/institucion" className={function ({isActive}) { return (isActive ? "activo" : 'none') } }>La Institución</NavLink></li>
                    <li><NavLink to="/carreras" className={function ({isActive}) { return (isActive ? "activo" : 'none') } }>Carreras</NavLink></li>
                    <li><NavLink to="/alumnos" className={function ({isActive}) { return (isActive ? "activo" : 'none') } }>Alumnos</NavLink></li>
                    <li><NavLink to="/novedades" className={function ({isActive}) { return (isActive ? "activo" : 'none') } }>Novedades</NavLink></li>
                    <li><NavLink to="/contacto" className={function ({isActive}) { return (isActive ? "activo" : 'none') } }>Contacto</NavLink></li>
                </ul>
            </div>
        </nav>

    )

}

export default Nav;