import { useState } from 'react'
import './App.css'
import Inputform from './components/Inputform'

function App() {
  const [open, setopen] = useState(false)

const openform = ()=>{
  setopen(!open)
}
  return (
    <>
   <div className="form-btn">
    <button onClick={openform}>FIll the form</button>
   </div>

  {open && <Inputform/>}
    </>
  )
}

export default App
