import { useState } from "react";
import React  from "react";
import './form.css'


const Inputform = () => {

    const [form , setform ] = useState({})

    const handlechange = (e)=>{
        setform ({...form , [e.target.name] : e.target.value})
    }

  return (
    <>
    <div className="form">Input form 
      <input placeholder="Enter your name" onChange={handlechange} name = "name" type="name" value={form.name ? form.name : ""} />
      <input placeholder="Enter your email" onChange={handlechange} name = "email" type="email" value={form.email ? form.email :""} />
      <input placeholder="Enter your Phone" onChange={handlechange} name = "phone" type="phone" value={form.phone ? form.phone :""} />
      <input placeholder="Enter your Password" onChange={handlechange} name = "password" type="password" value={form.password ? form.password : ""} />
      </div>

      <div className="display-cont"> Your Data
        <div className="name  show ">Your Name : {form.name} </div>
        <div className="email show ">Your Email : {form.email}</div>
        <div className="phone show ">Your Phone Number : {form.phone}</div>
        <div className="password show ">Your Password : {form.password}</div>
      </div>
    </>
  )
};

export default Inputform;
