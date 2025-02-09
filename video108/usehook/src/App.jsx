// use effect --> are the hooks in react which are used for giving side effect in react
// jab maine useeffect lagaya toh wohh 2 times chal gaya kyunki main.jsx me strict mode on hai joki developmen phase me code ko 2 times chalata hai use temporary of kr dena
// useeffect jab component mount hofga tab tab chalega

import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0);
  const [color ,  setColor] = useState(0);

  // use-effect
  // syntax -->
  // useEffect(() => {
  // }, [])
  
  // use-effect for count button --> jab page load hog Tabhi count wala useefect chalega kyunki initial usestate pe bhi useeffect lagu hota hai

  useEffect(() => {
    alert("COUNT WAS changed !! ");
    setColor(color + 1);
  }, [count]);

  return (
    <>
 <Navbar color =  {"Blue " + "Red "  + color}/>
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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
