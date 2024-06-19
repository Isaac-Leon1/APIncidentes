import { Link } from "react-router-dom"

const HeaderTools = () => {
  return (
    <nav className="header-tools">
        <Link to="/">
            <h2>IncidentAPI</h2>
        </Link>
        <div className="seccion-cuadroBusqueda">
            <input type="text" placeholder="Incidente..."/>
            <button><i className="fas fa-magnifying-glass"></i></button>
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