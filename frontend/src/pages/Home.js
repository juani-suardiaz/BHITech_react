import React from 'react';
import {NavLink} from 'react-router-dom';
import "../styles/components/pages/Home.css"

function Home () {

    return (

        <main>

            <div className="holder">
                
                <section id="slider">

                    <div id="zocalo">
                        <p>BIENVENIDOS AL MEJOR INSTITUTO TECNOLÓGICO <br/>DEL SUR ARGENTINO</p>
                    </div>

                </section>

                <section id="carreras">

                    <h2>#Nuestras_Carreras</h2>

                    <div id="cajaCarreras">
                    
                        <NavLink to="/carreras#desarrolloDeSoftware">Desarrollo de<br/>Software</NavLink>
                                    
                        <NavLink to="/carreras#cienciaDeDatos">Ciencia de<br/>Datos</NavLink>
                                    
                        <NavLink to="/carreras#internetDeLasCosas">Internet de las<br/>Cosas</NavLink>
                                    
                        <NavLink to="/carreras#inteligenciaArtificial">Inteligencia<br/>Artificial</NavLink>

                    </div>
                    
                </section>

                <section id="parallax">                
                    {/*acá va la imagen parallax como fondo*/}
                </section>

                <section id="graduados">

                    <h2>#Testimonios_de_nuestros_graduados</h2>

                    <div className="cajaGraduados">

                        <div className="testimonioGraduado">
                            Estudiar en el Instituto Tecnológico de Bahía Blanca me dio las herramientas que necesitaba para afrontar el paso de una organización fundada por un grupo de amigos a una organización profesional con procesos claros, objetivos concretos y una mirada a largo plazo. El cursado fue un gran aliado en este proceso, y dio la posibilidad de empaparme de todos los aspectos que hacen a una red social, otorgándome tanto conocimiento concreto para la toma de decisiones como una gran inspiración a la hora de innovar y crear nuevas iniciativas dentro de Twitter.
                            <br/><br/>
                            <address>Jack DORSEY - Twitter</address>
                            <NavLink to="/testimonios">+ testimonios</NavLink>
                        </div>

                        <div className="fotoGraduado">
                            <img className="retratoGraduado" src="images/graduado2.png" alt="Jack DORSEY"/>
                        </div>

                    </div>

                </section>

                <section id="mapa">

                    <h2>#Dónde_estamos</h2>

                    <div id="cajaMapa">
                    
                        <iframe title="mapa_ubicacion_instituto" src="https://www.google.com/maps/d/embed?mid=1VODPGlSyRL1ivG0ifYDZaIH4TzkuCTFW&ehbc=2E312F" width="1000" height="600">                        
                        </iframe>

                    </div>

                </section>

            </div>

        </main>

    )

}

export default Home;