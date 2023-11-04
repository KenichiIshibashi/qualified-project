function findAuthorById(authors, id) {
  //Find the author that matches the id
  return authors.find((author)=> author.id === id)
}

function findBookById(books, id) {
  //Find the book that matches the id
  return books.find((book)=> book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  //Create an array of books that are checked out and returned
  const borrowedBooks = books.filter((book)=> !book.borrows[0].returned);
  const returnedBooks = books.filter((book)=> book.borrows[0].returned == true);
  //Create an array that holds both arrays
  let totalArray = [borrowedBooks,returnedBooks];
  return totalArray;
}

function getBorrowersForBook(book, accounts) {
  // For each borrow record in the book's borrows array
  const borrowers = book.borrows.map(borrow => {
    // Find the account that matches the borrow id
    const account = accounts.find(acc => acc.id === borrow.id);

    // If we found an account, return a new object that combines 
    // the account information and the returned status
    if (account) {
      return {...account, returned: borrow.returned};
    }
  });

  // Return the first 10 borrowers
  return borrowers.slice(0, 10);
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
