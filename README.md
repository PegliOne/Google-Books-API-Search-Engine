# Google Books API Search Engine

A React web app that displays information about books using the Google Books API.

## How To Use

To install and run the app enter `npm install`, then `npm run dev` in the command line and navigate to the provided localhost port in the browser

Enter a query, then click the "Search" button to search the Google Books API for matching books. Blank queries are ignored.

Click on a book card to view a modal with more information about the book. This modal can then be closed by clicking the "Close" button.

## Features

- Responsive design
- User feedback for when the fetch request faills or no results are found
- Handles books single and multiple authors
- Uses a placeholder image to replace missing book cover images
- Truncates long descriptions
- Handles missing data (apart from the id and title, which I assumed would always be available)
- Mock data to test the app with in case the API request is failing (see below)

## Running the App without the Google Books API

I've been getting 429 errors from the Google Books API, so I created a mock data file (`src/data/db.json`), so the app can be tested in the case the API fails to return a result.

To start a mock API run `npx json-server --watch data/db.json --port 8000` from inside the `src` folder. To access the mock API in the app go the `src/services/getBooks.js`, then comment out `${GOOGLE_API_URL}q=${query}&maxResults=${RESULT_LIMIT}` and uncomment `MOCK_API_URL`.

The mock book data should load when a search is performed regardless of the search term entered (as long as the query isn't blank). Edit the mock data to see how the app handles tricky book data (e.g. missing information, long titles or a lack of results).

## Technologies Used

- React (with SCSS)
- Git Version Control (including the creation of a develop branch)
