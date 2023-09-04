import React from 'react'
import { Logo } from '../../constants'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>

<div className="container d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
      <NavLink to={'/'} >
        <img src={Logo} alt="" width={80}/>
        </NavLink>
    
      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <NavLink className="me-3 py-2 link-body-emphasis text-decoration-none" to={'/login'}>Login</NavLink>
        <NavLink className="me-3 py-2 link-body-emphasis text-decoration-none" to={'/register'}>Register</NavLink>
      </nav>
    </div>
    
    </div>
  )
}

export default Navbar