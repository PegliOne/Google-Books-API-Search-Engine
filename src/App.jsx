import { useState } from "react";
import { getBooks } from "./services/getBooks";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import BookGrid from "./containers/BookGrid/BookGrid";

function App() {
  const [books, setBooks] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const query = formData.get("query");
    getBooks(query).then((books) => {
      console.log(books);
      setBooks(books);
    });
  };

  return (
    <>
      <Header />
      <SearchBar handleSubmit={handleSubmit} />
      {books && <BookGrid books={books} />}
    </>
  );
}

export default App;
