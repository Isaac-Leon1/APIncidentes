import { useState, useEffect } from "react";
import { useAuth } from "../context/authContext";
import IncidentCard from "../components/IncidentCard";

const SearchIncident = () => {
    // Enlace a la API de incidentes
    const [incidents, setIncidents] = useState([]);
    const { query } = useAuth();
    const URL = `https://taller12-13.onrender.com/api/v1/incidents/?clasific=${query}`;
    
    
    useEffect(() => {
        const loadData = async () => {
            const response = await fetch(URL);
            const data = await response.json();
            setIncidents(data);
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
    );
    }

export default SearchIncident;