import styles from "./SearchBar.module.scss";

const SearchBar = ({ handleSubmit }) => {
  return (
    <form className={styles.searchbar} onSubmit={(e) => handleSubmit(e)}>
      <label className={styles.searchbar__label} htmlFor="searchInput">
        <img className={styles.searchbar__icon} src="search.svg" alt="Search" />
      </label>
      <input
        className={styles.searchbar__input}
        id="searchInput"
        type="text"
        name="query"
        placeholder="Enter search term..."
      />
      <button className={styles.searchbar__button} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
