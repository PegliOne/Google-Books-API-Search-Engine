import styles from "./BookGrid.module.scss";
import Book from "../../components/Book/Book";
import books from "../../data/books.json";

const BookGrid = () => {
  return (
    <main className={styles.grid}>
      {books.map((book) => (
        <Book
          title={book.title}
          author={book.author}
          description={book.description}
          coverUrl={book.coverUrl}
        />
      ))}
    </main>
  );
};

export default BookGrid;
