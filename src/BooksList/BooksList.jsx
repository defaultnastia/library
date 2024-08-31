import Book from "../Book/Book";

const BooksList = ({ books }) => {
  return (
    <div>
      <h2>List of the books</h2>
      <ul>
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
