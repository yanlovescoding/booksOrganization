import React, { Component } from 'react';
import BookItem from './BookItem';

class Bookcase extends Component {

  render(){
    const { aBookCase, allBooks, onMove } = this.props;
    console.log('Check filter: ',this.props);
  	const booksOnThisShelf = allBooks.filter(aBook => {
      if (aBook.shelf === aBookCase.bookCaseKey) {
        return aBook
      }});

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{aBookCase.bookCaseName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksOnThisShelf.map(aBook => (
            <BookItem key={aBook.id} aBook={aBook} aBookCaseKey={aBookCase.bookCaseKey} onMove={onMove} />
          ))}
        </ol>
      </div>
    </div>
  );
};
};

export default Bookcase;
