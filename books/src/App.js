import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);
  const fetchBooks = async () => {
    const resonse = await axios.get("http://localhost:3001/books");
    setBooks(resonse.data);
  };
  useEffect(() => {
    fetchBooks();
  }, []);
  const createBook = async (title) => {
    // const updateBooks = [
    //   ...books,
    //   { id: Math.round(Math.random() * 9999), title },
    // ];
    // setBooks(updateBooks);
    const resonse = await axios.post("http://localhost:3001/books", {
      title,
    });
    const updateBooks = [...books, resonse.data];
    setBooks(updateBooks);
  };
  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`)
    const updateBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updateBooks);
  };
  const editBookById = async (id, newTitle) => {
    if (newTitle) {
      const response = await axios.put(`http://localhost:3001/books/${id}`, {
        title: newTitle,
      });
      const updateBooks = books.map((book) => {
        if (book.id === id) {
          return { ...book, ...response.data };
        }
        return book;
      });
      setBooks(updateBooks);
    }
  };
  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList bookList={books} onDelete={deleteBook} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
