import styles from "./BookGrid.module.scss";
import { formatAuthorNames, setCoverImageUrl } from "../../js/utils";
import Book from "../../components/Book/Book";

const BookGrid = ({ books, error }) => {
  return (
    <main>
      <section className={styles.grid}>
        {books &&
          books.map((book) => (
            <Book
              key={book.id}
              title={book.volumeInfo.title}
              authors={formatAuthorNames(book.volumeInfo.authors)}
              description={book.volumeInfo.description}
              coverUrl={setCoverImageUrl(book.volumeInfo.imageLinks?.thumbnail)}
            />
          ))}
      </section>
      {error && <p className={styles.error}>{error}</p>}
    </main>
  );
};

export default BookGrid;
