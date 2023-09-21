import styles from "./BookGrid.module.scss";
import Book from "../../components/Book/Book";

// TODO: Improve Author listing logic to use "and" for the last author
// TODO: Improve logic for handling missing cover images

const BookGrid = ({ books, error }) => {
  return (
    <main>
      <section className={styles.grid}>
        {books &&
          books.map((book) => (
            <Book
              key={book.id}
              title={book.volumeInfo.title}
              authors={book.volumeInfo.authors?.join(", ")}
              description={book.volumeInfo.description}
              coverUrl={book.volumeInfo.imageLinks?.thumbnail}
            />
          ))}
      </section>
      {error && <p className={styles.error}>{error}</p>}
    </main>
  );
};

export default BookGrid;
