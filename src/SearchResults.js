import React from 'react';
import BookItem from './BookItem';

const SearchResults = props => {
  const { searchBooks, myBooks,onMove } = props;

  const updatedBooks = searchBooks.map(book => {
    myBooks.map(b => {
      if (b.id === book.id) {
        book.shelf = b.shelf;
      }
      return b;
    });
    return book;
  });
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {updatedBooks.map(aBook => (
          <BookItem key={aBook.id} aBook={aBook} aBookCaseKey={aBook.shelf} onMove={onMove} />
        ))}
      </ol>
    </div>
  );
};

export default SearchResults;
