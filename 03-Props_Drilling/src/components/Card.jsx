import React from 'react'

const card = (obj) => {

    console.log(obj);

  return (
    <div>
      <div className="card">
        <img src={obj.img} alt="" />
        <h1>{obj.user}, {obj.age}</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        </p>
        <button>
            View Profile
        </button>
      </div>
    </div>
  )
}

export default card
