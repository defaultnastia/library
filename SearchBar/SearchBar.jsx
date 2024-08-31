import css from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div>
      <h2>Search a Book</h2>
      <p>Please enter the title or ISBN of the book</p>
      <div>
        <input type="text" />
        <button>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
