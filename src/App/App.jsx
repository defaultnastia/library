import { useEffect, useState } from "react";
import BooksList from "../BooksList/BooksList";
import css from "./App.module.css";
import { getAllBooks } from "../services/booksAPI";
import SearchBar from "../../SearchBar/SearchBar";
import AddNewBook from "../../AddNewBook/AddNewBook";

function App() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const getBooks = async () => {
      try {
        setError(false);
        setLoader(true);
        const fetchedBooks = await getAllBooks();
        setBooks(fetchedBooks);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };

    getBooks();
  }, []);

  return (
    <>
      <h1 className={css.welcome}>Welcome to the ✨Library✨ </h1>
      <div className={css.controls}>
        <SearchBar />
        <AddNewBook />
      </div>
      {books.length > 0 ? (
        <BooksList books={books} />
      ) : (
        <p>There are no books in the Library yet</p>
      )}
    </>
  );
}

export default App;
