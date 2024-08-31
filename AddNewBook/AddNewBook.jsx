import css from "./AddNewBook.module.css";

const AddNewBook = () => {
  return (
    <div>
      <h2>Add a New Book</h2>
      <form className={css.form}>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Author" />
        <input type="checkbox" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddNewBook;
