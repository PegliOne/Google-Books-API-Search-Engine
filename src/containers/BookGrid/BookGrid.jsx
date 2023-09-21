import styles from "./BookGrid.module.scss";
import Book from "../../components/Book/Book";

// TODO: Improve Author listing logic to use "and" for the last author

const BookGrid = ({ books }) => {
  return (
    <main className={styles.grid}>
      {books.map((book) => (
        <Book
          title={book.volumeInfo.title}
          author={book.volumeInfo.authors.join(", ")}
          description={book.volumeInfo.description}
          coverUrl={book.volumeInfo.imageLinks.thumbnail}
        />
      ))}
    </main>
  );
};

export default BookGrid;
