import { useState } from "react";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import BookGrid from "./containers/BookGrid/BookGrid";

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

  const mockBooks = [
    {
      id: 1,
      volumeInfo: {
        title: "Book",
        authors: ["Author One", "Author Two", "Author Three"],
        description: "Hello there",
      },
    },
    {
      id: 2,
      volumeInfo: {
        title: "Book",
        authors: ["Single Author"],
        description: "Hello there",
      },
    },
  ];

  return (
    <>
      <Header />
      <SearchBar handleSubmit={handleSubmit} />
      <BookGrid books={mockBooks} error={error} />
    </>
  );
}

export default App;
