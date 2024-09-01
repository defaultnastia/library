import { useEffect, useRef } from "react";
import { addBook, getAllBooks, updateBook } from "../../services/booksAPI";
import Button from "../Button/Button";
import css from "./AddOrEditBook.module.css";

const AddOrEditBook = ({
  setBooks,
  setLoader,
  setError,
  editMode,
  setEditMode,
}) => {
  const formRef = useRef();
  const titleInputRef = useRef();
  const authorInputRef = useRef();
  const isbnInputRef = useRef();
  const isBorrowedInputRef = useRef();

  useEffect(() => {
    if (titleInputRef.current) {
      titleInputRef.current.value = editMode?.title || "";
    }
    if (authorInputRef.current) {
      authorInputRef.current.value = editMode?.author || "";
    }
    if (isbnInputRef.current) {
      isbnInputRef.current.value = editMode?.isbn || "";
    }
    if (isBorrowedInputRef.current) {
      isBorrowedInputRef.current.checked = editMode?.isBorrowed || "";
    }
  }, [editMode]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const title = event.target.title.value;
    const author = event.target.author.value;
    const isbn = event.target.isbn.value;
    const isBorrowed = event.target.borrowed.checked;

    try {
      setLoader(true);
      setError(null);

      if (
        title === editMode?.title &&
        author === editMode?.author &&
        isbn === editMode?.isbn &&
        isBorrowed === editMode?.isBorrowed
      ) {
        setEditMode(null);
        return;
      }

      if (editMode) {
        await updateBook(editMode.isbn, { title, author, isbn, isBorrowed });
      } else {
        await addBook({ title, author, isbn, isBorrowed });
      }

      const newBookList = await getAllBooks();
      setBooks(newBookList);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoader(false);
      setEditMode(null);
    }

    formRef.current.reset();
  };

  const handleCancelButton = (event) => {
    event.preventDefault();
    setEditMode(null);
  };

  return (
    <div>
      <h2 className={css.header}>
        {editMode ? `Edit the Book "${editMode.title}"` : "Add a New Book"}
      </h2>
      <form className={css.form} onSubmit={handleSubmit} ref={formRef}>
        <input
          name="title"
          type="text"
          placeholder="Title"
          ref={titleInputRef}
          required
        />
        <input
          name="author"
          type="text"
          placeholder="Author"
          ref={authorInputRef}
          required
        />
        <input
          name="isbn"
          type="text"
          placeholder="ISBN"
          ref={isbnInputRef}
          disabled={editMode && true}
          required
        />
        <label>
          <input name="borrowed" type="checkbox" ref={isBorrowedInputRef} />
          Mark as borrowed
        </label>
        <Button type="submit" btnType="submit">
          {editMode ? "Update In The Library" : "Add To The Library"}
        </Button>
        {editMode && (
          <Button type="button" btnType="red" onClick={handleCancelButton}>
            Cancel
          </Button>
        )}
      </form>
    </div>
  );
};

export default AddOrEditBook;
