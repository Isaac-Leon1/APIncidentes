import { Link } from "react-router-dom"
import { useAuth } from "../context/authContext"

const HeaderTools = () => {
    const {query, setQuery} = useAuth();

    const handleSearch = (e) => {
        setQuery(e.target.value);
    }

  return (
    <nav className="header-tools">
        <Link to="/">
            <h2>IncidentAPI</h2>
        </Link>
        <div className="seccion-cuadroBusqueda">
            <input type="text" placeholder="Incidente..."/>
            <Link to="/search">
                <button onClick={handleSearch}><i className="fas fa-magnifying-glass"></i></button>
            </Link>
        </div>
        <div className="botonCuenta">
            <Link to="/login">
                <button 
                className="userIcon"
                >
                    <i className="fas fa-user"></i>
                </button>
            </Link>
        </div>
    </nav>
  )
}

export default HeaderTools