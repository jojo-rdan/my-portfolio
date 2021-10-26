import { Link } from "react-router-dom";
export default function Home () {
    return ( 
        <div>
            <Link to="/home-en">
                <button>Banderita de US</button>
            </Link>
            Este será el home, con Proyectos, Experiencia y Contacto.
            <Link to="/temporal">
                <button>Mi linea temporal</button>
            </Link>
        </div>
     );
}