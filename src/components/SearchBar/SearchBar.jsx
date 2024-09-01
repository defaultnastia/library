import { useRef } from "react";
import { getAllBooks, searchBooks } from "../../services/booksAPI";
import Button from "../Button/Button";
import css from "./SearchBar.module.css";

const SearchBar = ({ setBooks, setLoader, setError }) => {
  const formRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const query = event.target.query.value.trim();

    try {
      setLoader(true);
      setError(null);
      const queriedBooks = await searchBooks(query);
      setBooks(queriedBooks);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoader(false);
    }

    formRef.current.reset();
  };

  const handleReset = async () => {
    try {
      setLoader(true);
      setError(null);
      const allBooks = await getAllBooks();
      setBooks(allBooks);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className={css.search}>
      <h2>Search a Book</h2>
      <div className={css.wrapper}>
        <form className={css.box} onSubmit={handleSubmit} ref={formRef}>
          <input
            name="query"
            type="text"
            placeholder="Title or ISBN"
            required
          />
          <Button type="submit" btnType="submit">
            Search
          </Button>
        </form>
        <Button type="button" btnType="red" onClick={handleReset}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
