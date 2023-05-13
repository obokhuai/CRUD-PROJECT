import { useState} from "react";
import React from 'react'
import BookCreate from "./components/BookCreate";
import BookLIst from "./components/BookLIst";
 
function App() {
  const [books, setBooks] = useState([])

  const createBook = (title) =>{
    setBooks([...books, 
      {id:Math.round(Math.random()*9999), 
      title}])
  }



  return (
    <div className="app">
      <BookLIst books={books}/>
      <BookCreate onCreate={createBook}/>
    </div>
  )
}

export default App

