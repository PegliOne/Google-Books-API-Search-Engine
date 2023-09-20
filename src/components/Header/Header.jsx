import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__heading}>Google Books API Search Engine</h1>
      <p className={styles.header__para}>
        Search for books using the search bar below
      </p>
    </header>
  );
};

export default Header;
