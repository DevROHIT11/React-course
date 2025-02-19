import React from 'react'
import {NavLink} from 'react-router-dom'

const Footer = () => {
  return (
    <>
  <div className='footer' >
    <NavLink className={(e) => {return e.isActive?"gray" :""}} to="/" >Home</NavLink>
      <NavLink className={(e) => {return e.isActive?"gray" :""}} to="/contact" >Contact</NavLink>
      <NavLink className={(e) => {return e.isActive?"gray" :""}} to="/faq" >Faq</NavLink>
      </div>
   
    </>
  )
}

export default Footer
