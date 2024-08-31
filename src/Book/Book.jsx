import css from "./Book.module.css";

const Book = ({ book }) => {
  const { title, author, isbn, isBorrowed } = book;

  return (
    <div className={css.book}>
      <h3>Title: {title} </h3>
      <p>Author: {author}</p>
      <p>ISBN: {isbn}</p>
      {isBorrowed ? <p> 🔄 Borrowed</p> : <p> ✅ Returned</p>}
    </div>
  );
};

export default Book;
