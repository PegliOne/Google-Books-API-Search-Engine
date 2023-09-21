import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  return (
    <form className={styles.searchbar}>
      <label className={styles.searchbar__label} htmlFor="searchInput">
        <img className={styles.searchbar__icon} src="search.svg" alt="Search" />
      </label>
      <input
        className={styles.searchbar__input}
        id="searchInput"
        type="text"
        placeholder="Enter search term..."
      />
      <button className={styles.searchbar__button} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
