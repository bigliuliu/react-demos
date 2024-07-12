import { useState } from "react";
import BookEdit from './BookEdit'
import useBooksContext from "../hooks/use-books-context";
function BookShow({ book}) {
  const [showEdit,setShowEdit] = useState(false)
  const {deleteBook} = useBooksContext()
  const handleDeleteClick = () => {
    deleteBook(book.id);
  };
  const handleSubmit = () =>{
    setShowEdit(!showEdit)
  }
  let content = <h3>{book.title}</h3>
  if(showEdit){
    content = <BookEdit book = {book} onSubmit= {handleSubmit}/>
  }
  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books"/>
    <div>{content}</div>  
      <div className="actions">
        <button className="edit" onClick={handleSubmit}>Edit</button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
