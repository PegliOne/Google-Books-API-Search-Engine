import { useState } from "react";
import { getBooks } from "./services/getBooks";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import BookGrid from "./containers/BookGrid/BookGrid";
import Modal from "./components/Modal/Modal";

function App() {
  const [books, setBooks] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const query = formData.get("query");
    getBooks(query)
      .then((books) => {
        if (books) {
          console.log(books[0]);
          setBooks(books);
          setError(null);
        } else {
          setError(`No books found for query "${query}"`);
          setBooks(null);
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <>
      <Header />
      <SearchBar handleSubmit={handleSubmit} />
      <BookGrid books={books} error={error} />
      {books && (
        <Modal
          title={books[0].volumeInfo.title}
          publishedDate={books[0].volumeInfo.publishedDate}
          country={books[0].accessInfo.country}
          language={books[0].volumeInfo.language.toUpperCase()}
          maturity={books[0].volumeInfo.maturityRating}
        />
      )}
    </>
  );
}

export default App;
