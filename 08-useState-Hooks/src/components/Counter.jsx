import  { useState } from 'react'


const Counter = () => {

    const [count, setCount] = useState(0)

    // increase
    const increase = ()=>{
        setCount(count+1)
    }

    // decrease
    const decrease = ()=>{
        setCount(count-1)
    }

  return (
    <>
   <h1>Counter</h1>
    <div>
      <button onClick={()=>{
        increase()
      }}
      >+
      </button>

      <div>{count}</div>

      <button onClick={()=>{
        if(count>0){
            decrease()
        }else{
            alert("Count is zero")
        }
        
      }}>-</button>
    </div>
     </>
  )
}

export default Counter
