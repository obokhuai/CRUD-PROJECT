
import React from 'react'
import BookShow from './BookShow'

function BookLIst({books}) {
  return (
    <div className='book-list'>
      {books.map((book)=>{
 return <BookShow key={book.id} book ={book}/>
 })}
    </div>
  )
}

export default BookLIst