import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage () {
    return ( 
        <div>
            Está será mi landing, con mi foto de perfil, fondo cool de Vanta.js y el botón de enter.
            <Link to="/home">
                <button>Entrar</button>
            </Link>
        </div>
     );
}