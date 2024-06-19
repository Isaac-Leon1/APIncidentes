import { useAuth } from '../context/authContext'
import { Link } from 'react-router-dom'
import userImage from '../assets/user_avatar.png'

const ProfilePage = () => {
    const {user,logOut} = useAuth()
    // Función para cargar los incidentes
    return (
        <section className='body-perfil'>
            <Link to='/add-incident' className='acciones-usuario'>
                <button>Agregar Incidente</button>
            </Link>
            <div className='contenedor-usuario'>
                <h2>Perfil de Usuario</h2>
                <section>
                    <img src={userImage} alt='Imagen de Usuario' />
                    <button onClick={logOut}>Cerrar Sesión</button>
                </section>
                <section className='info-usuario'>
                    <p><strong>ID:</strong> {user._id}</p> 
                    <p><strong>Nombre de Usuario:</strong> {user.username}</p> 
                    <p><strong>Dirección:</strong> {user.address}</p> 
                    <p><strong>Número Celular:</strong> {user.cellphone}</p> 
                    <p><strong>Edad:</strong> {user.age}</p> 
                    <p><strong>Email:</strong> {user.email}</p> 
                </section>
            </div>
        </section>
    )
}

export default ProfilePage