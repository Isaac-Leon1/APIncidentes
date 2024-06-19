import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/authContext";

// Componente para las rutas protegidas (privadas)
const ProtectedRoute = () => {
    // Extraer los valores del contexto de autenticación
    const { user, isAuthenticated, loading } = useAuth();

    // Si se está cargando la información de autenticación, mostrar un mensaje de carga
    if (loading) return <h1>Cargando...</h1>;

    // Si no se está cargando y el usuario no está autenticado, redirigir a la página de inicio de sesión
    if (!loading && !isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    // Si el usuario está autenticado, mostrar el contenido de la ruta protegida
    return <Outlet />;
};

// Exportar el componente
export default ProtectedRoute;