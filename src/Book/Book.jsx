import Button from "../Button/Button";
import css from "./Book.module.css";

const Book = ({ book }) => {
  const { title, author, isbn, isBorrowed } = book;

  return (
    <div className={css.book}>
      <h3>{title} </h3>
      <p>Author: {author}</p>
      <p>ISBN: {isbn}</p>
      {isBorrowed ? <p> 🔄 Borrowed</p> : <p> ✅ Returned</p>}
      <div className={css.tools}>
        <Button type="normal">{isBorrowed ? "Return" : "Borrow"}</Button>
        <Button type="normal">Edit</Button>
        <Button type="red">Delete</Button>
      </div>
    </div>
  );
};

export default Book;
