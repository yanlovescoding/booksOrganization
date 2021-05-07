import { React, Component } from 'react';
import CaseSwitcher from './CaseSwitcher';

class BookItem extends Component {
  render() {
    const { aBook, aBookCaseKey, onMove } = this.props;
    return (
      <li>
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{ width: 128, height: 193, backgroundImage:
          `url(${
               aBook.imageLinks
                ? aBook.imageLinks.thumbnail
                : 'icons/book-placeholder.svg'
            })`
          }}
        />
        <CaseSwitcher aBook={aBook} aBookCaseKey={aBookCaseKey} onMove={onMove} />
      </div>
      <div className="book-title">{aBook.title}</div>
      <div className="book-authors">
        {aBook.authors ? aBook.authors.join(', ') : 'Unknown Author'}
      </div>
    </div>
  </li>
    );
  }
}
export default BookItem;
