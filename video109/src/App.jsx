// first use or useRef is in App_1.jsx file
// we can't use ref to display the value of ref in any component 
// Another use of UseRef --> to do Dom manipulation , no need to select element by dom can choose any element  by ref
// we can do just by ref.current
import { useState , useEffect , useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import App_1 from './App_1.jsx'

function App() {

  const [count, setCount] = useState(0)

  const btnref = useRef()

  useEffect(() => {
    btnref.current.style.backgroundColor = "red";
    console.log(`after first rerendering ....`)
  },[])
  

  return (
    <>
        {/* <App_1/> */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref={btnref} onClick={() => setCount((count) => count + 1)}>
          count is {count} 
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
{/* This button will hide the count button */}
      <button  onClick={()=> { btnref.current.style.display = "none"}}>change me</button>
    </>
  )
}

export default App
