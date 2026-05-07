import  { useState } from 'react'


const App = () => {
  const [num, setnum] = useState(0)

  const changeval = ()=>{
    setnum(num+1) // aysnc function , value change hogi and  previous wali value print hogi
    console.log(num); 


   // batch update
    setnum(num+1)
    setnum(num+1)
    setnum(num+1) //  only ekbar update hoga because react batch update karta hai, isliye num+1 ke jagah prev=>prev+1 use karna chahiye
    // Batch update in React means: React groups multiple state updates together and performs only one re-render for better performance.

    // in this we used previous value so the num update by 3  but in above method we are ussing initial num value 
    setnum(prev=>(prev+1))
    setnum(prev=>(prev+1))
    setnum(prev=>(prev+1))
    
    // see image  -> 09-Advance-useState\src\assets\explanation

    
  }

  // array 
  const [arr, setarr] = useState([1,2,3,4])
  const [user, setuser] = useState({user: "rohit", age: 25})
  const changearr = ()=>{

    // we do this to avoid immutability of the original ones, sometime the react  wont re-render the component if we change the  original one 
    const newarr = [...arr] // destructuring the arraay and copying it in the new array and then changing it 
    newarr.push(5)
    setarr(newarr)

    // object destructuring
    const newuser = {...user}
    newuser.user = "Sapna"
    newuser.age = 30
    setuser(newuser)

    // another method -->> take previous state -> copy it -> then add 8 at the end -> update it to ui 
    setarr(prev=>[...prev , 8])
    setuser(prev=>({
      ...prev, 
      user: "ravi", 
      age: 40
      })
    )

  }


  return (
    <div>
      <h1>{num}</h1>
      <h1>{arr}</h1>
      <h1>{user.user}, {user.age}</h1>
      <button onClick={()=>{
        changeval();
        changearr();
      }}>Change</button>
    </div>
  )
}

export default App
