import { useState } from "react";
import "./App.css" ;
import {Trash2 } from "lucide-react";

const App = () => {

  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

  const [task, settask] = useState([])


  const submitHandler = (e)=>{
    e.preventDefault();
    console.log(title, description);

    // storing the notes in the array of object [{title1, desc1} , {title2, desc2}]
    const newTask = [...task];
    newTask.push({title,description})
    settask(newTask); 
    // console.log(task);
    
  }

  const deleteCard  = (id)=>{
    const copyTask = [...task];
    copyTask.splice(id, 1);  // splice(startIndex, deleteCount) splice basically use to modify arrray

    settask(copyTask);

  }

  return (
    <>
    <div className="max-w-screen h-screen mt-10 ml-10 ">
    <div className="note-cont flex gap-10  ">
      <div className="border-r-2 pr-10 border-white h-auto">
      {/* heading */}
      <h1 className="text-white mb-2 text-3xl font-bold">Add Notes</h1>

      {/* form */}
      <form onSubmit={(e)=>{
        submitHandler(e);
      }}
       className="flex flex-col gap-4  w-3xs h-auto text-white "
       >

        {/* title */}
        <input  onChange = {(e)=>{
          settitle(e.target.value)
        }}
        className="bg-zinc-700 border-zinc-400 border-1 focus:border-0 focus:bg-zinc-800 focus:outline-offset-4 focus:outline-zinc-700 focus:outline-0 rounded-md p-2" 
        type="text" 
        placeholder="Enter Title..."
        value={title} required
        />

        {/* description */}
        <textarea onChange={(e)=>{setdescription(e.target.value)}} 
        className=" bg-zinc-700 border-zinc-400 border-1 focus:border-0 focus:bg-zinc-800 h-30 p-2 rounded-md align-top focus:outline-0" 
        placeholder="Enter description"
        value={description}  />

        {/* button */}
        <button type="submit" className="bg-white text-black p-2 rounded-md hover:bg-gray-400 hover:transform hover:scale-105">Add note</button>
      </form>
        </div>

      {/* notes visible */}
      <div className="w-lvw">
      <h1 className="text-3xl font-bold">Recent Notes</h1>
      <div className="list-cont flex gap-8 flex-wrap">
        {task.map((item, id) =>{
      console.log(item);
  
      return   <div
  key={id}
  className="list-card flex flex-col justify-between mt-4 bg-zinc-800 w-72 min-h-72 rounded-2xl border border-zinc-700 shadow-lg overflow-hidden"
>

  {/* Title */}
  <div className="border-b border-zinc-700 px-5 py-4">
    <h1 className="text-white text-2xl font-bold break-words">
      {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
    </h1>
  </div>

  {/* Description */}
  <div className="flex-1 px-5 py-4 overflow-y-auto">
    <p className="text-zinc-300 leading-relaxed break-words">
      {item.description}
    </p>
  </div>

  {/* Footer */}
  <div className="px-5 pb-5 pt-2 flex justify-end">
    {/* delete button */}
    <button onClick={(id)=>{
      deleteCard(id);
      
    }} className="bg-red-400 border-2 border-red-800 text-white px-4 py-2 rounded-lg hover:bg-red-600 hover:scale-110 duration-200 active:scale-95">
     <Trash2 size={20} />
    </button>
  </div>

</div>
    })}
       
       </div>
      </div>

    </div>

   
  
      </div>
    </>
  )
}

export default App
