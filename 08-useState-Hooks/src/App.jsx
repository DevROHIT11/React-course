import  { useState } from "react";
import Counter from "./components/Counter"
import "./App.css"

const App = () => {

  const [num, setnum] = useState(10)
  const[username, setUserName] = useState("Rohit")
  const [arr, setarr] = useState([10,20,30])

  function changeval(){
    setnum(num +1)

    setUserName("Tushar")

    arr.push(50) //this function return len of arr and not array
    // setarr(arr.push(50)) // this will return the len of array
    setarr(arr)

    console.log(num, username, arr);
    
  }


  return (
    <>
  
    <div>
      <h1>{num}</h1>
      <h1>{username}</h1>
      <p>{arr}</p>
      <button onClick={()=>{
        changeval()
      }}
      >change
      </button>
    </div>

    <div className="Counter">
      <Counter/>
    </div>
      </>
  )
}

export default App
