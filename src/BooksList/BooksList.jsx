import Book from "../Book/Book";
import css from "./BooksList.module.css";

const BooksList = ({ books, setEditMode, setLoader, setError, setBooks }) => {
  return (
    <div>
      <h2 className={css.header}>List of the books</h2>
      <ul className={css.list}>
        {books.map((book) => {
          return (
            <li key={book.isbn}>
              <Book
                book={book}
                setEditMode={setEditMode}
                setLoader={setLoader}
                setError={setError}
                setBooks={setBooks}
              ></Book>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BooksList;
