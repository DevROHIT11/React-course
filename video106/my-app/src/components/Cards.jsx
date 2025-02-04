import React from "react";
import "./Cards.css";

const cards = (props) => {
  return (
    <>
        <div className="cards"> 
            {/* inline css using javascript */}
          <img src="https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D" alt=""  width={300} style={{ border : "2px solid black"  }} />
          
          <h1> {props.title} </h1>
          <p> {props.description} </p>
        </div>
    </>
  );
};

export default cards;
