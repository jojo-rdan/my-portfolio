import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage () {
    return ( 
        <div>
            <Link to="/-en">
                <button>Banderita de US</button>
            </Link>
            <img src="../img/IMG_3978.jpg" alt='img'/>
            <Link to="/home">
                <button>Entrar</button>
            </Link>
        </div>
     );
}