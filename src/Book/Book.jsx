import Button from "../Button/Button";
import { deleteBook, getAllBooks, markAsBorrowed } from "../services/booksAPI";
import css from "./Book.module.css";

const Book = ({ book, setEditMode, setLoader, setError, setBooks }) => {
  const { title, author, isbn, isBorrowed } = book;

  const handleBorrowButton = async () => {
    try {
      setLoader(true);
      await markAsBorrowed(isbn, !isBorrowed);
      const allBooks = await getAllBooks();
      setBooks(allBooks);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoader(false);
      setEditMode(null);
    }
  };

  const handleEditButton = () => {
    setEditMode(book);
  };

  const handleDeleteButton = async () => {
    try {
      setLoader(true);
      await deleteBook(isbn);
      const allBooks = await getAllBooks();
      setBooks(allBooks);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoader(false);
      setEditMode(null);
    }
  };

  return (
    <div className={css.book}>
      <h3>{title} </h3>
      <p>Author: {author}</p>
      <p>ISBN: {isbn}</p>
      {isBorrowed ? <p> 🔄 Borrowed</p> : <p> ✅ Returned</p>}
      <div className={css.tools}>
        <Button btnType="normal" onClick={handleBorrowButton}>
          {isBorrowed ? "Return" : "Borrow"}
        </Button>
        <Button btnType="normal" onClick={handleEditButton}>
          Edit
        </Button>
        <Button btnType="red" onClick={handleDeleteButton}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Book;
