import { useState } from 'react'
import './App.css'

function App() {
 
  return (
   <Mybutton/>  // button is component now
  )
}

function Mybutton(){
  let [count , setcount] = useState(0);

  let counter = ()=>{ 
    count = setcount(count + 1) ; 
  }
   
  return (
    <>
    <button onClick={counter} >click me</button>
    <div>{count}</div>
    </>
  )
}

export default App
