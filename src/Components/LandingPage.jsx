import React from "react";
import { Link } from "react-router-dom";
import image from '../img/IMG_3978.jpg';
import us from '../img/estados-unidos.png';

export default function LandingPage () {
    return ( 
        <div>
            <Link to="/-en">
                <img src={us} width={'30px'} alt="Bandera de USA" />
            </Link>
            Este será mi Landing, con mi foto de perfil, vanta genial.js fondo y entrar.
                <div>
                    <img src={image} width={'250px'} alt='imagen de perfil' />
                    <h1>Hola! Mi nombre es Jordan González</h1>
                </div>
                <div>
                    <h1>Desarrollador Web Full-Stack</h1>
                    <p>Soy un apasionado de aprender y aportar ideas para crear proyectos de calidad.</p>
                </div>
            <Link to="/home">
                <button>Conóceme!</button>
            </Link>
        </div>
     );
}