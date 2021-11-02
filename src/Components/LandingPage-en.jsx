import React from "react";
import { Link } from "react-router-dom";
import image from '../img/IMG_3978.jpg';

export default function LandingPageEn () {
    return ( 
        <div>
            <Link to="/">
                <button>Banderita de SPA</button>
            </Link>
            This will be my landing, with my profile pic, cool Vanta.js background and enter.
            <div>
                <img src={image} width={'250px'} alt='imagen de perfil' />
            </div>
            <Link to="/home-en">
                <button>Enter</button>
            </Link>
        </div>
     );
}