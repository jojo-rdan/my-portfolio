import React from "react";
import { Link } from "react-router-dom";
import image from '../img/IMG_3978.jpg';
import spa from '../img/espana.png';

export default function LandingPageEn() {
    return (
        <div>
            <Link to="/">
                <img src={spa} width={'30px'} alt="Flag of Spain" />
            </Link>
            This will be my landing, with my profile pic, cool Vanta.js background and enter.
                <div>
                    <img src={image} width={'250px'} alt='imagen de perfil' />
                    <h1>Hi! My name is Jordan González</h1>
                </div>
                <div>
                    <h1>Desarrollador Web Full-Stack</h1>
                    <p>I am very passionate about learning and contributing ideas to create quality projects.</p>
                </div>
            <Link to="/home-en">
                <button>About me!</button>
            </Link>
        </div>
    );
}