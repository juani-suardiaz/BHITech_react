import React from 'react';
import "../styles/components/pages/Contacto.css"

function Contacto () {

    return (

        <main>

            <div className="holder">

                <h1>#Su consulta no molesta</h1>

                <p id="infoContacto">Si desea efectuar alguna consulta acerca de inscripciones a las carreras, exámenes, solicitud de becas o cualquier otra cuestión sobre la que necesite asesoramiento, puede rellenar el siguiente formulario. Su consulta será respondida a la brevedad al correo electrónico que haya consignado al momento de rellenar el formulario.</p>

                <form action="">

                    <div id="cajaFormulario">

                        <input type="text" placeholder="Nombre" required/>
                        <input type="text" placeholder="Apellido" required/>
                        <input type="email" placeholder="e-mail" required/>

                        <p>Texto de la consulta</p>

                        <textarea name="vv" id="vv" rows="10" maxlength="1000" required ></textarea>

                        <input type="submit" value="ENVIAR"/>

                    </div>

                </form>

            </div>

        </main>

    )

}

export default Contacto;