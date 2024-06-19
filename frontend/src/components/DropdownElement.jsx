import React, { useState } from 'react'

const DropdownElement = ({ valuesForDropList, onChange }) => {
    const [opcionSeleccionada, setOpcionSeleccionada] = useState(valuesForDropList[0])

    const handleChange = (e) => {
        setOpcionSeleccionada(e.target.value)
        onChange(e.target.value)
    }
  return (
    <select className='lista-desplegable' onChange={handleChange}>
        <option value="" disabled>Selecciona una opcion</option>
        {valuesForDropList.map((value, index) => (
        <option key={index} value={value}>{value}</option>
        ))}
    </select>
  )
}

export default DropdownElement