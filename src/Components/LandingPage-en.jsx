import React from "react";
import { Link } from "react-router-dom";

export default function LandingPageEn () {
    return ( 
        <div>
            <Link to="/">
                <button>Banderita de SPA</button>
            </Link>
            This will be my landing, with my profile pic, cool Vanta.js background and enter.
            <Link to="/home-en">
                <button>Enter</button>
            </Link>
        </div>
     );
}