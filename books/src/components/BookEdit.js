import { useState } from "react";
function BookEdit({book,onSubmit}) {
  const [title, setTitle] = useState(book.title)
  const handleChange = (event) =>{
    setTitle(event.target.value)
  }
  const handleSubmit = (event) =>{
    event.preventDefault();
    onSubmit(book.id,title)
    console.log(title,"New")
  }
  return (
    <form className="booke-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange}></input>
      <button className="button is-primary" >Save</button>
    </form>
  );
}

export default BookEdit;
