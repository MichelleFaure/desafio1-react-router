import React from 'react'
import notfound from "../404.jpg" 
import "./NotFound.css"

const NotFound = () => {
  return (
    <div className='notfound'>
        <img className='gato' src={notfound} alt="" />
    </div>
  )
}

export default NotFound