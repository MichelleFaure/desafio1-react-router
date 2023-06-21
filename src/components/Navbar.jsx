import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faAddressBook, faCakeCandles } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='linkContainer'>
        <div>
          <FontAwesomeIcon icon={faHouse} />
          <Link className='link' to="/">Home</Link>
        </div>

        <div>
          <FontAwesomeIcon icon={faAddressBook} />
          <Link className='link' to="/contacto">Contacto</Link>
        </div>
      </div>

      <div className='logo'>
        <span >Happy Cake</span>
        <FontAwesomeIcon icon={faCakeCandles} />
      </div>
    </nav>
  )
}

export default Navbar