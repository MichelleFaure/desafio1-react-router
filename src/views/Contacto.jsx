import React from 'react'
import "./Contacto.css"

const Contacto = () => {
  return (
    <div className='contacto'>
        <div>
            <label>Correo</label>
            <input type="text" placeholder='name@example.com' />
            <label>Descripción</label>
            <textarea rows="10" placeholder='Ingresa Descripción'></textarea>
        </div>

    </div>
  )
}

export default Contacto