import React from 'react'
import './App.css';

// button clicked function
const btnclicked = (val)=>{
  console.log(val)
}

// input value function
const inputval = (elem)=>{
  console.log(elem);
}

function App() {
  
  return (
    <>
    <div className="container">

    {/* aise function ko call karenge toh params pass nhi kar payenge */}
    {/* <button onClick = {btnclicked}> */}
    <button onClick = {(elem)=>{
      // target -> tells which element used 
      btnclicked(elem.target);
    }}>
    click me
    </button>

    <input onChange = {(elem)=>{

      // the position of x at mouse enter
      // console.log(elem.clientX)

      inputval(elem.target.value.toUpperCase());

    }} type="text" placeholder ="Enter your name "></input>
   </div>
    </>
  )
}

export default App
