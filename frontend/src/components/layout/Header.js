import React from 'react';
import {NavLink} from "react-router-dom";
import "../../styles/components/layout/Header.css";

function Header () {

    return (

        <header>
            <div className="holder">

                <div id="cajaCabecera">

                    <div id="cajaLogo">
                        <NavLink to="/"><img id="logo" src="images/logo.png" alt="Instituto Tecnológico de Bahía Blanca"/></NavLink>
                    </div>

                    <div id="cajaNombre">
                        Instituto Tecnológico <br/>
                        de Bahía Blanca
                    </div>

                </div>

            </div>
        </header>

    )

}

export default Header;