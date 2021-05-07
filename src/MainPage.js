import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MainPageButton from './MainPageButton';
import MainPageHeader from './MainPageHeader';
import BooksDisplayedPanel from './BooksDisplayedPanel';

class MainPage extends Component {
  render() {
    const { bookCase, allBooks, onMove } = this.props;
    return (
      <div className="list-books">
        <MainPageHeader />
        <div className="list-books-content">
         <BooksDisplayedPanel
           bookCase = {bookCase}
           allBooks = {allBooks}
           onMove = {onMove}
           />
        </div>
           <MainPageButton />
      </div>
    );
  }
}

export default MainPage;
