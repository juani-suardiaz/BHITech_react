import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Se importan los estilos

import './App.css';

// Se importan los componentes

// LAYOUTS

import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

// PAGES

import Home from "./pages/Home";
import Institucion from "./pages/Institucion";
import Carreras from "./pages/Carreras";
import Alumnos from "./pages/Alumnos";
import Novedades from "./pages/Novedades";
import Contacto from "./pages/Contacto";
import Testimonios from "./pages/Testimonios";

function App() {
  return (
    <div className="App">      
      <Router>
        <Header/>
        <Nav/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/institucion" exact element={<Institucion/>}/>
          <Route path="/carreras" exact element={<Carreras/>}/>
          <Route path="/alumnos" exact element={<Alumnos/>}/>
          <Route path="/novedades" exact element={<Novedades/>}/>
          <Route path="/contacto" exact element={<Contacto/>}/>
          <Route path="/testimonios" exact element={<Testimonios/>}/>
        </Routes>
        <Footer/>
      </Router>      
    </div>
  );
}

export default App;
