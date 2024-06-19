import { useEffect } from 'react'
import { useAuth } from '../context/authContext'
import { Link, useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const {signIn, isAuthenticated, errors: loginError} = useAuth()

  const navigate = useNavigate() // Hook para redireccionar a otra página

  const onSubmit = (e) => {
    e.preventDefault()
    const data = {
      email: e.target.email.value,
      password: e.target.password.value
    }
    const signUp = signIn(data)
    if (signUp){
      navigate('/login')
    }
  }

  useEffect(() => {
    if(isAuthenticated){
      navigate('/profile') // Si la autenticacion es exitosa, redirecciona a la pagina tasks
    }
  }, [isAuthenticated])
  return (
    <div className="contenedor-formulario">
      <h1>Login</h1>
      {
        loginError.map((error, i) =>(
          <div className='elemento-error' key={i}>
            {error}
          </div>
        ))
      }
      <form className="formulario" onSubmit={onSubmit}>
        <label htmlFor="email">Correo</label>
        <input type="email" id="email" name="email" required/>
        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" name="password" required/>
        <button type="submit">Iniciar Sesion</button>
      </form>
      <p>¿No tienes cuenta?</p>
      <Link to="/register">Registrate aqui!</Link>
    </div>
  )
}

export default LoginForm