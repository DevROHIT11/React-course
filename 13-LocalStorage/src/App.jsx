// import React from "react";

const App = () => {
  localStorage.clear();
  sessionStorage.clear();

  localStorage.setItem("age", "21");
  localStorage.setItem("name", "Rohit");

  console.log(localStorage.getItem("age"));
  console.log(localStorage.getItem("name"));

  // storing array
  const user = {
    name: "Rohit",
    age: 21,
    loc: "Pune",
  };

  // local storage stores only strings so converting the array into string using JSON.stringify() function
  localStorage.setItem("user", JSON.stringify(user));

  const usera = JSON.parse(localStorage.getItem("user"));
  console.log(usera);
  console.log(typeof usera);

  return <div>App</div>;
};

export default App;
