import { Link } from "react-router-dom";
export default function Home () {
    return ( 
        <div>
            Este será el home, con Proyectos, Experiencia y Contacto.
            <Link to="/temporal">
                <button>Mi linea temporal</button>
            </Link>
        </div>
     );
}