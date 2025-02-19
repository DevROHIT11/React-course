import { useState } from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'


import './App.css'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Faq from '../components/Faq'
import Navbar from '../components/navbar'


function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element : <> <Footer/>   </>
    } , 
    {
      path:"/contact",
      element : <> <Footer/> <Contact/> </>
    } , 
    {
      path:"/faq",
      element : <> <Footer/> <Faq/> </>
    }
  ])

  return (
    <>
  <Navbar/>
 <RouterProvider router = {router} />
    </>
  )
}

export default App
