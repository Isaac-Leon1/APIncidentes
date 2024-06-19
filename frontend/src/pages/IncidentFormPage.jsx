import { useAuth } from '../context/authContext'

const IncidentFormPage = () => {

  const {submitIncident, errors: submitError} = useAuth()

  const onSubmit = (e) => {
    e.preventDefault()
    const data = {
      type: e.target.type.value,
      date: e.target.date.value,
      location: e.target.location.value,
      description: e.target.description.value,
      status: e.target.status.value
    }
    const response = submitIncident(data)
    if (response){
      e.target.type.value = ""
      e.target.date.value = ""
      e.target.location.value = ""
      e.target.description.value = ""
      e.target.status.value = ""
    }
  }

  return (
    <div>
        <h1>IncidentFormPage</h1>
        {
        submitError.map((error, i) =>(
          <div className='elemento-error' key={i}>
            {error}
          </div>
        ))
        }
        <form className='submit-incident' onSubmit={onSubmit}>
            <label htmlFor="type">Tipo de Delito</label>
            <input type="text" id="type" name="type" required/>

            <label htmlFor="date">Fecha</label>
            <input type="text" id="date" name="date" required/>

            <label htmlFor="location">Ubicación</label>
            <input type="text" id="location" name="location" required/>

            <label htmlFor="description">Descripción</label>
            <input type="text" id="description" name="description" required/>

            <label htmlFor="status">Estado del caso</label>
            <input type="text" id="status" name="status" required/>

            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default IncidentFormPage