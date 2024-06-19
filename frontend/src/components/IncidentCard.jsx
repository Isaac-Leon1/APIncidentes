const IncidentCard = ({type, date, location, description, status}) => {
  return (
    <div className="incident-card">
        <h2>{type}</h2>
        <p><strong>Fecha:</strong> {date}</p>
        <p><strong>Ubicacion:</strong> {location}</p>
        <p><strong>Descripcion:</strong> {description}</p>
        <p><strong>Estado:</strong> {status}</p>
    </div>
  )
}

export default IncidentCard