import { useState, useEffect, createContext, useContext } from "react";
import { loginRequest, registerRequest, submitRequest } from "../api/auth";

// Crear el contexto de autenticación
export const AuthContext = createContext();

// Hook para acceder al contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe estar dentro del proveedor AuthProvider");
  }
  return context;
};

// Proveedor de autenticación
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);
    let setTimeOuts = [];

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsAuthenticated(true);
        }
        setLoading(false);
    }, []);

    const signUp = async (user) => {
        try {
            const response = await registerRequest(user);
            console.log(response);
            setUser(response.data);
            setIsAuthenticated(true);
        } catch (error) {
            console.log(error.response.data);
            setErrors([error.response.data]);
        }
    };

    const signIn = async (user) => {
        try {
            const response = await loginRequest(user);
            console.log(response);
            setUser(response.data);
            setIsAuthenticated(true);
            localStorage.setItem("token", response.data.token);
        } catch (error) {
            console.log(error.response.data);
            if (Array.isArray(error.response.data)) {
                setErrors(error.response.data);
            } else {
                setErrors([error.response.data.msg]);
            }
        }
    };

    const logOut = () => {
        localStorage.removeItem("token");
        setUser(null);
        setIsAuthenticated(false);
    };

    // Crea un incidente en la base de datos
    const submitIncident = async (data) => {
        try {
            const token = localStorage.getItem('token');
            if (token){
                const response = await submitRequest(data,token);
                console.log(response);
            }else{
                console.log("Token no proporcionado")
            }
            
        } catch (error) {
            console.log(error.response.data);
            if (Array.isArray(error.response.data)) {
                setErrors(error.response.data);
            } else {
                setErrors([error.response.data.msg]);
            }
        }
    }

  function handleDelete(array){
    if (array.length == 0){
        clearTimeOuts();
        return;
    }

    const deleteLastItem = () => {
            array.pop();
            setErrors([...array]);
            setTimeOuts.push(setTimeout(deleteLastItem, 5000))
        };
        setTimeOuts.push(setTimeout(deleteLastItem, 5000));
    }

    function clearTimeOuts(){
        setTimeOuts.forEach((timeout) => {
            clearTimeout(timeout);
        });
        setTimeOuts = [];
    }

    // Limpiar los errores
    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                handleDelete(errors);
            }, 5000); // Establecer un limite para mostrar los mensajes

            return () => clearTimeout(timer); // Limpiar el temporizador
        }  
    }, [errors])

  return (
    <AuthContext.Provider value={{ 
        user, 
        isAuthenticated, 
        errors, 
        loading, 
        signUp, 
        signIn, 
        logOut,
        submitIncident
    }}>
      {children}
    </AuthContext.Provider>
  );
};