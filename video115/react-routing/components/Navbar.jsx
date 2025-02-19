import React from 'react'
// import { Link } from 'react-router-dom'
// agr hame Link ke under class name lagana hoga to hum Navlink ka use krenge
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        {/* isse page reload  hoga  */}
      {/* <a href="/"><li>Home</li></a>
      <a href="/login"><li>login</li></a>
      <a href="/about"><li>about</li></a> */}

      {/* agr page reload nhi hone chaiye to hum react router use krenge */}
     <nav>
      <NavLink className={(e)=>{return e.isActive ?"red" : ""}} to="/"><li>Home</li></NavLink>
      <NavLink className={(e)=>{return e.isActive ?"red" : ""}} to="/login"><li>login</li></NavLink>
      <NavLink className={(e)=>{return e.isActive ?"red" : ""}} to="/about"><li>about</li></NavLink>
      </nav>
    </div>
  )
}

export default Navbar
