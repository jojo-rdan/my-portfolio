import React from "react";
import { Link } from "react-router-dom";
import image from '../img/IMG_3978.jpg';

export default function LandingPage () {
    return ( 
        <div>
            <Link to="/-en">
                <button>Banderita de US</button>
            </Link>
            Este será mi Landing, con mi foto de perfil, vanta genial.js fondo y entrar.
            <div>
                <img src={image} width={'250px'} alt='imagen de perfil' />
            </div>
            <Link to="/home">
                <button>Entrar</button>
            </Link>
        </div>
     );
}