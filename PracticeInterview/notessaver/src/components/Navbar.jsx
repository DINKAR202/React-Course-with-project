import React from "react"
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="container flex flex-row gap-2">
      <NavLink to='/'>Home</NavLink>
      <NavLink to="/pastes">Pastes</NavLink>
    </div>
  )
}

export default Navbar
