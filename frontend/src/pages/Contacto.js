import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import "../styles/components/pages/Contacto.css";

function Contacto () {

    const initialForm = {
        nombre: '',
        apellido: '',
        email: '',        
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    function handleChange (e) {

        const {name, value} = e.target;
        
        setFormData(function (oldData){
            return {...oldData, [name] : value}
        })

    }

    async function handleSubmit (e) {

        e.preventDefault();
        setMsg('');
        setSending(true);

        const response = await axios.post('http://localhost:3000/api/contacto', formData);

        setSending(false);
        setMsg(response.data.message);

        if(response.data.error === false) {
            setFormData(initialForm);
        }

    } 

    return (

        <main>

            <div className="holder">

                <h1>#Su consulta no molesta</h1>

                <p id="infoContacto">Si desea efectuar alguna consulta acerca de inscripciones a las carreras, exámenes, solicitud de becas o cualquier otra cuestión sobre la que necesite asesoramiento, puede rellenar el siguiente formulario. Su consulta será respondida a la brevedad al correo electrónico que haya consignado al momento de rellenar el formulario.</p>

                <form action="/contacto" method="post" onSubmit={handleSubmit}>

                    <div id="cajaFormulario">

                        <input type="text" name="nombre" value={formData.nombre} placeholder="Nombre" required onChange={handleChange}/>
                        <input type="text" name="apellido" value={formData.apellido} placeholder="Apellido" required onChange={handleChange}/>
                        <input type="email" name="email" value={formData.email} placeholder="e-mail" required onChange={handleChange}/>

                        <p>Texto de la consulta</p>

                        <textarea name="mensaje" value={formData.mensaje} rows="10" maxlength="1000" required onChange={handleChange}></textarea>

                        <input type="submit" value="ENVIAR"/>

                    </div>

                </form>

                {sending ? <p>enviando...</p> : null}
                {msg ? <p>{msg}</p> : null}

            </div>

        </main>

    )

}

export default Contacto;