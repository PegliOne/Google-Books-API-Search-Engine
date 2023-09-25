import { useState } from "react";
import { getBooks } from "./services/getBooks";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import BookGrid from "./containers/BookGrid/BookGrid";
import Modal from "./components/Modal/Modal";

function App() {
  const [books, setBooks] = useState(null);
  const [error, setError] = useState(null);
  const [modalBook, setModalBook] = useState(null);

  const resetData = () => {
    setError(null);
    setBooks(null);
    setModalBook(null);
  };

  const getQuery = (e) => {
    const formData = new FormData(e.target);
    return formData.get("query");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    resetData();
    const query = getQuery(e);

    // Getting Books
    getBooks(query)
      .then((books) => {
        if (books) {
          setBooks(books);
        } else {
          setError(`No books found for query "${query}"`);
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleBookClick = (e) => {
    const modalBookId = e.currentTarget.id;
    const modalBook = books.find((book) => book.id === modalBookId);
    setModalBook(modalBook);
  };

  const closeModal = () => {
    console.log("Hello there");
    setModalBook(null);
  };

  return (
    <>
      <Header />
      <SearchBar handleSubmit={handleSubmit} />
      <BookGrid books={books} error={error} handleBookClick={handleBookClick} />
      {modalBook && (
        <Modal
          title={modalBook.volumeInfo.title}
          publishedDate={modalBook.volumeInfo.publishedDate}
          country={modalBook.accessInfo.country}
          language={modalBook.volumeInfo.language.toUpperCase()}
          maturity={modalBook.volumeInfo.maturityRating}
          closeModal={closeModal}
        />
      )}
    </>
  );
}

export default App;
