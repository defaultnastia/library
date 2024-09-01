import { useEffect, useState } from "react";
import { getAllBooks } from "../../services/booksAPI";
import AddOrEditBook from "../AddOrEditBook/AddOrEditBook";
import BooksList from "../BooksList/BooksList";
import SearchBar from "../SearchBar/SearchBar";
import css from "./App.module.css";

function App() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  const [editMode, setEditMode] = useState(null);

  useEffect(() => {
    const getBooks = async () => {
      try {
        setError(null);
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
        <SearchBar
          setBooks={setBooks}
          setLoader={setLoader}
          setError={setError}
        />
        <AddOrEditBook
          setBooks={setBooks}
          setLoader={setLoader}
          setError={setError}
          editMode={editMode}
          setEditMode={setEditMode}
        />
      </div>
      {error && (
        <p className={css.error}>
          Ooops! An error happened:{" "}
          {error.includes("409") ? "The book should be unique." : error}
        </p>
      )}
      {loader && <p className={css.loading}> 🟡 Loading...</p>}
      {books.length > 0 ? (
        <BooksList
          books={books}
          setEditMode={setEditMode}
          setLoader={setLoader}
          setError={setError}
          setBooks={setBooks}
        />
      ) : (
        <p>
          There are no books in the Library yet or no books matching your
          search.
        </p>
      )}
    </>
  );
}

export default App;
