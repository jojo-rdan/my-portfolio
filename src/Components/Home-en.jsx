import { Link } from "react-router-dom";
export default function HomeEn () {
    return ( 
        <div>
            <Link to="/home">
                <button>
                ESP flag
                </button>
            </Link>
            This will be home, with projectsm experiences and contact
            <Link to="/temporal">
                <button>My time line</button>
            </Link>
        </div>
     );
}