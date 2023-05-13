import { useState} from "react";
import React from 'react'

function BookCreate({onCreate}) {
  const [name, setName] = useState("");

  const handleInput =(event)=>{
    setName(event.target.value);
  }

  const handleFormSubmit = (event)=>{
  event.preventDefault();
  onCreate(name);
  setName("")
  }

  return (
    <div className="book-create">
      <form onSubmit={handleFormSubmit}>
        <h1>Add a Book</h1>
       <div><label>Title</label></div> 
       <div><input className="input" value={name} onChange = {handleInput}/></div> 
       <div> <button className="button">Submit</button></div>
      </form>
    </div>
  )
}

export default BookCreate