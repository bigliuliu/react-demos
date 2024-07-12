import React from "react";
import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";
function BookCreate() {
    const [title,setTitle] = useState('')
    const handleChange = (event) =>{
        setTitle(event.target.value)
    }
    const {createBook} = useBooksContext()
    const handleSubmit = (event) =>{
        event.preventDefault();
        createBook(title)
        // after add ,revert title empty
        setTitle('')
    }
    return (
      <div className="book-create">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" value={title} onChange={handleChange}/>
            <button className="button">Create!</button>
        </form>
      </div>
    );
  }
  
  export default BookCreate;