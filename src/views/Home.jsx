import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCakeCandles } from '@fortawesome/free-solid-svg-icons'

import "./Home.css"

import cakeimg from "../cake.png"



const Home = () => {
  return (
    <div className='home'>
        <h1>Bienvenido a <span>Happy Cake</span></h1>
        <p>El lugar de los pasteles felices</p>
        <img src={cakeimg} />
        
    </div>
  )
}

export default Home

