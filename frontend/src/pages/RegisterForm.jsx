import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useAuth } from "../context/authContext"
import DropdownElement from "../components/DropdownElement"

const capitales = {
    "Azuay": "Cuenca",
    "Bolívar": "Guaranda",
    "Cañar": "Azogues",
    "Carchi": "Tulcán",
    "Chimborazo": "Riobamba",
    "Cotopaxi": "Latacunga",
    "El Oro": "Machala",
    "Esmeraldas": "Esmeraldas",
    "Galápagos": "Puerto Baquerizo Moreno",
    "Guayas": "Guayaquil",
    "Imbabura": "Ibarra",
    "Loja": "Loja",
    "Los Ríos": "Babahoyo",
    "Manabí": "Portoviejo",
    "Morona Santiago": "Macas",
    "Napo": "Tena",
    "Orellana": "Francisco de Orellana",
    "Pastaza": "Puyo",
    "Pichincha": "Quito",
    "Santa Elena": "Santa Elena",
    "Santo Domingo de los Tsáchilas": "Santo Domingo",
    "Sucumbíos": "Nueva Loja",
    "Tungurahua": "Ambato",
    "Zamora Chinchipe": "Zamora"
}
const ArrayCapitales = Object.keys(capitales).sort()
const RegisterForm = () => {
  const {signUp, isAuthenticated, errors: registerError} = useAuth()
  const [selectedAddress, setSelectedAddress] = useState(ArrayCapitales[0]); // Estado para el valor seleccionado en el dropdown
  const navigate = useNavigate() // Hook para redireccionar a otra página

  const onSubmit = (e) => {
    e.preventDefault()
    const data = {
      username: e.target.username.value,
      address: selectedAddress,
      cellphone: e.target.cellphone.value,
      age: e.target.age.value,
      email: e.target.email.value,
      password: e.target.password.value
    }
    try {
      signUp(data)
      if(data){
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if(isAuthenticated){
      navigate('/') // Si la autenticacion es exitosa, redirecciona a la pagina de inicio
    }
  }, [isAuthenticated])
  return (
    <div className="contenedor-formulario">
        <h1>Registro</h1>
        {
          registerError.map((error, i) =>(
            <div className='elemento-error' key={i}>
              {error}
            </div>
          ))
        }
        <form className="formulario" onSubmit={onSubmit}>
            <label htmlFor="username">Nombre de usuario</label>
            <input type="username" id="username" name="username" required />
            <label htmlFor="address">Dirección</label>
            <DropdownElement 
            valuesForDropList={ArrayCapitales}
            onChange={(value) => setSelectedAddress(value)}
            />
            <label htmlFor="email">Correo</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="age">Edad</label>
            <input type="number" id="age" name="age" required />
            <label htmlFor="cellphone">Número de celular</label>
            <input type="number" id="cellphone" name="cellphone" required />
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" required />
            <button type="submit">Registrar</button>
        </form>
        <p>¿Ya tienes cuenta?</p>
        <Link to="/login">Iniciar Sesion</Link>
    </div>
  )
}

export default RegisterForm