import { useState } from 'react'
import './App.css'

function App() {
  const handleclick = ()=>{
    alert("You click the button")
  }

  const handlemouseover = ()=>{
    alert('You enter on box')
  }

// const [name, setname] = useState("Rohit")
// const handleinput = (e)=>{
//   setname(e.target.value)
// }



const [form, setform] = useState({email : "" , phone : ""})
const handleinput = (e)=>{
   setform({...form , [e.target.name] : e.target.value})
  }

  return (
    <>
     <div className="button">
      <button  onClick={handleclick} >Click me</button>
     </div>

    {/* <div onMouseOver={handlemouseover} className="box">I'm green box</div> */}

    {/* <input onChange={handleinput} type="text" value={name} /> */}

<input name="email" onChange={handleinput} type="text" value={form.email} />
<input name="phone" onChange={handleinput} type="text" value={form.phone} />

    </>
  )
}

export default App
