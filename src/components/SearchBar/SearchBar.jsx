import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  return (
    <form className={styles.searchbar}>
      <label className={styles.searchbar__label} htmlFor="searchInput">
        Enter Search Term:
      </label>
      <input className={styles.searchbar__input} id="searchInput" type="text" />
      <button className={styles.searchbar__button} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
