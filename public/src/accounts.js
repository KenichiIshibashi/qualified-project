function findAccountById(accounts, id) {
  //Return the account object with the following id//
  return accounts.find((account)=> account.id === id);
}

function sortAccountsByLastName(accounts) {
return accounts.sort((accountA,accountB) => accountA.name.last > accountB.name.last ? 1 : -1);
}


function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc,book)=>{
    return acc+book.borrows.filter(borrow => borrow.id === account.id).length;
  },0);
}

function getBooksPossessedByAccount(account, books, authors) {
  const borrowedBooks = books.filter(book =>{
    const recentBorrow = book.borrows[0];
    return !recentBorrow.returned && recentBorrow.id === account.id
  });
  
  const booksWithAuthors = borrowedBooks.map(book =>{
    const author = authors.find(author => author.id === book.authorId)
    return {...book, author};
  });
  return booksWithAuthors
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
