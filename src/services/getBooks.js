const GOOGLE_API_URL = "https://www.googleapis.com/books/v1/volumes?";
const RESULT_LIMIT = 12;
const MOCK_API_URL = "http://localhost:8000/books";

export const getBooks = async (query) => {
  const response = await fetch(
    `${GOOGLE_API_URL}q=${query}&maxResults=${RESULT_LIMIT}`
    //MOCK_API_URL
  );
  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }
  const data = await response.json();
  return data.items;
};
