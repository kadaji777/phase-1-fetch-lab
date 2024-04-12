function fetchBooks() {
  // Fetch data from the Game of Thrones API
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json()) // Convert the response to JSON
    .then((booksData) => {
      // Once the data is retrieved, process it as needed
      // For example, you can find the 5th book in the series
      const fifthBook = booksData[4].name; // Arrays are zero-indexed
      console.log("The 5th book in the series:", fifthBook);

      // You can also find the 1031st character in the series
      const character1031 = booksData.flatMap(book => book.characters)[1030];
      console.log("The 1031st character in the series:", character1031);

      // And calculate the total number of pages of all the books
      const totalPages = booksData.reduce((total, book) => total + book.numberOfPages, 0);
      console.log("The total number of pages of all the books:", totalPages);

      // Call renderBooks with the JSON-ified data
      renderBooks(booksData);

      // Finally, return the JSON-ified data
      return booksData;
    })
    .catch((error) => {
      console.error("Error fetching books:", error);
    });
}

// Call the fetchBooks function
fetchBooks();


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
