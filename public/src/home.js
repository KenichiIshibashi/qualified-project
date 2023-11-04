function getTotalBooksCount(books) {
//Return the length of the book array
  return books.length
}

function getTotalAccountsCount(accounts) {
  //Return the length of the accounts within the array
  return accounts.length
}

function getBooksBorrowedCount(books) {
  //Return the amount of checked out books
  return books.filter((book)=> !book.borrows[0].returned).length;
}

function getMostCommonGenres(books) {
  const genreCounts = books.reduce((acc, book) => {
    // If the genre is already in the accumulator, increment its count
    if (acc[book.genre]) {
      acc[book.genre]++;
    } else {
      // Otherwise, add the genre to the accumulator with a count of 1
      acc[book.genre] = 1;
    }

    return acc;
  }, {});

  // Convert the genreCounts object into an array of objects, each with a name and count key
  const genres = Object.keys(genreCounts).map((genre) => ({
    name: genre,
    count: genreCounts[genre]
  }));

  // Sort the genres array in descending order by count, then take the top 5
  return genres.sort((genreA, genreB) => genreB.count - genreA.count).slice(0, 5);
}

function getMostPopularBooks(books) {
  const borrowCount = books.map((book)=>({
    name: book.title,
    count: book.borrows.length,
  }));
  return borrowCount.sort((bookA, bookB)=> bookB.count - bookA.count).slice(0, 5)
}


function getMostPopularAuthors(books, authors) {
  const popularAuthors = authors.map((author,book)=> {
    const authorBooks = books.filter(book => book.authorId === author.id)
    return {
    name: `${author.name.first} ${author.name.last}`,
    count: authorBooks.reduce((acc,book)=> acc + book.borrows.length, 0)
  };
  });
  
  return popularAuthors.sort((authorA, authorB)=> authorB.count - authorA.count).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
