import Book from "../Book/Book";
import css from "./BooksList.module.css";

const BooksList = ({ books }) => {
  return (
    <div>
      <h2 className={css.header}>List of the books</h2>
      <ul className={css.list}>
        {books.map((book) => {
          return (
            <li key={book.isbn}>
              <Book book={book}></Book>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BooksList;
