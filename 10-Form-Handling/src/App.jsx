import "./App.css" ;

const submitHandler = (e)=>{
  e.preventDefault(); // avoids refreshing behaviour of page after form submission
  console.log("form submitted");
  
}

const App = () => {
  return (
    <div>
      <form onSubmit={(e)=>{
          submitHandler(e)
        }} >
        <input type="text" placeholder="Enter your name..." />
        <button >submit</button>
      </form>
    </div>
  )
}

export default App
