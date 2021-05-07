import React, { Component } from 'react';
import Bookcase from './Bookcase';

class BooksDisplayedPanel extends Component {
  render() {
    const { bookCase, allBooks, onMove } = this.props;
    return (
          <div>
            {bookCase.map(aBookCase => (
              <Bookcase
                key={aBookCase.bookCaseKey}
                aBookCase={aBookCase}
                allBooks={allBooks}
                onMove={onMove}
              />
            ))}
          </div>
    );
  }
}

export default BooksDisplayedPanel;
