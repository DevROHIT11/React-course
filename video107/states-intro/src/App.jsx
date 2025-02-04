// state -->the states are use to store the data/values of components which further change upon user interaction.
// hooks --> hooks provide extra functionality to a javascript function or can use to use different react feature for our components
// E.g -> state hook :- use to store the value taken from user input (in contact form suppose a user input his name then it can be display to hime by STATE HOOK) 

import { useState } from 'react'
import './App.css'

function check(count){
  if(count == 0 ){
    alert("Reached to zero , TMKC !!")
  }
}

function App() {
  // count nam ka state bananyo jiski initial value hogi 0 fir setcount nam ka function banavo jo count ko update karega
  const [count, setCount] = useState(0)

  return (  
    <>
    {/* updating the number */}
      <div className="count">The count is {count} </div>
      <button onClick={()=>{setCount(count + 1 )}}>Upgrade</button>

    {/* degrading the number */}
      <button onClick={()=> {setCount(count - 1 ) , check(count)}}>Degrade</button>

     
    </>
  )
}

export default App
