import { useState } from 'react'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
// RouterPRovider  --> jaha pr bhi hame component fit krna hoga waha hum routerprovider laga denge
import './App.css'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Login from '../components/Login'
import About from '../components/About'
import User from '../components/user'

function App() {
  const router = createBrowserRouter([
    {
      path : "/" ,
      element :   <> <Navbar /> <Home/>  </> 
    } , 
    {
      path:"/login",
      element:  <>< Navbar/> <Login/>  </>
    } ,
    {
      path:"/about",
      element:  <> <Navbar /> <About/>  </>
    } ,
    {
      // :username --> syntax for wwhen we need to pass params from link
      path:"/user/:username",
      element:  <> <Navbar /> <User/>  </>
    }

  ])

  return (
    <>  
    <RouterProvider router = {router} />
  
    </>
  )
}

export default App
