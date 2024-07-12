import { useContext } from "react";
import BookShow from "./BookShow";
import BookContext from "../context/books";
function BookList() {
  const {books} = useContext(BookContext)
  const renderBooks = books.map((book) => {
    return (
      <BookShow  key={book.id} book={book} />
    );
  });
  return (
    <div className="book-list">
      {renderBooks}
    </div>
  );
}

export default BookList;
