// conditional rendering -- if else
// agr javascript likhni hai react me to curly braces use karo

import { useState } from "react";
import "./App.css";

function App() {
  const [showbtn, setshowbtn] = useState(false);
  const [todos, settodo] = useState([
    {
      title: "Hey I'm todo",
      desc: "I'm good todo",
    },

    {
      title: "Hey I'm another todo",
      desc: "I'm good todo to do ",
    },

    {
      title: "Hey I'm grocery todo",
      desc: "I'm good todo but I'm Grocery todo",
    },
  ]);

  // component ham aise bhi bana sakte hai
  const Todo = ({ Todo }) => {
    return (
      <>
        <div className="todo-cont">
          <div className="todo">{Todo.title}</div>
          <div className="todo-desc">{Todo.desc}</div>
        </div>
      </>
    );
  };

  return (
    <>
    {/* CONDITIONAL RENDERING METHOD 1 */}
      {/* {showbtn ? <button>Showbtn is true</button> : <button>Showbtn is false</button>} */}

{/* CONDITIONAL RENDERING METHOD 2 */}
      {/* jab showbtn true hoga tab && ke age ka code execute hogab  */}
      {showbtn && <button>Showbtn is true</button>}

      <button
        onClick={() => {
          setshowbtn(!showbtn);
        }}
      >
        Click me
      </button>

      {/* CONDITIONAL RENDERING METHOD 3 */}

      {/* map function for loop ke tarah kam krta hai jo ki todo ki list banayi hai hamne useState me usme sare list ko render karega map function */}
      {todos.map((item) => {
        console.log(item);

        // calling the Todo Component
        // key ki value unique honi chaiye jo ki hum hamare components se pass krenge aur components je jo pass krenge vo bhi unique hona chaiye jaise ki title unique hai 
        // vaise to hum KEY me id pass krte hai but abhi id nhi lagayi hai
        return <Todo key={item.title} Todo={item} />;
      })}
    </>
  );
}

export default App;
