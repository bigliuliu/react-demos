import { useContext } from "react";
import BookContext from "../context/books";
import BookShow from "./BookShow";
function BookList({ bookList, onDelete, onEdit }) {
  const { count, incrementCount } = useContext(BookContext);
  const renderBooks = bookList.map((book) => {
    return (
      <BookShow onDelete={onDelete} onEdit={onEdit} key={book.id} book={book} />
    );
  });
  return (
    <div className="book-list">
      {count}
      <button onClick={incrementCount}>Click </button>
      {renderBooks}
    </div>
  );
}

export default BookList;
