import { useEffect, useState } from 'react'
import IncidentCard from '../components/IncidentCard';

const IncidentsPage = () => {
    // Enlace a la API de incidentes
    const URL = "https://taller12-13.onrender.com/api/v1/incidents"
    // Estado para almacenar los incidentes
    const [incidents, setIncident] = useState([])

    // Función para cargar los incidentes
    useEffect(() => {
        const loadData = async() =>{
            const response = await fetch(URL);
            const data = await response.json();
            setIncident(data); // Almacenar los incidentes en el estado
        };
        loadData();

    }, []);
    return (
        <>
            <h1>Incidentes</h1>
            <div className='contenedor-incidentes'>
                {incidents.map(incident => (
                <IncidentCard 
                key={incident._id} 
                type={incident.type} 
                date={incident.date} 
                location={incident.location} 
                description={incident.description} 
                status={incident.status}/>
                ))}
            </div>
        </>
    )
}

export default IncidentsPage