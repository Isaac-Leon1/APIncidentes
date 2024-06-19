import { useAuth } from '../context/authContext'

const ProfilePage = () => {
    const {user,logOut} = useAuth()
    // Función para cargar los incidentes
    return (
        <>
            <div className='contenedor-usuario'>
                <strong>ID:</strong><p>{user._id}</p> 
                <strong>Nombre de Usuario:</strong><p>{user.username}</p> 
                <strong>Dirección:</strong><p>{user.address}</p> 
                <strong>Número Celular:</strong><p>{user.cellphone}</p> 
                <strong>Edad:</strong><p>{user.age}</p> 
                <strong>Email:</strong><p>{user.email}</p> 
            </div>
            <button onClick={logOut}>Cerrar Sesión</button>
        </>
    )
}

export default ProfilePage