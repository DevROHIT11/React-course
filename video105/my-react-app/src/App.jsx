import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* navbar */}
      <Navbar text ="logo-here-1"/>  {/* giving the value of props */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    <Navbar text ="logo-here-2"/>
    <Footer/>
    </>
  )
}

export default App
