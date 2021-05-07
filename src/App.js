import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';
import MainPage from './MainPage';
import SearchPage from './SearchPage';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    allBooks:[],
    bookCase:[
      { bookCaseKey: 'currentlyReading', bookCaseName: 'Currently Reading' },
      { bookCaseKey: 'wantToRead', bookCaseName: 'Want to Read' },
      { bookCaseKey: 'read', bookCaseName: 'Read' },
    ],
    searchResult: []
  }
  };

  componentDidMount = () => {
    BooksAPI.getAll().then(res => {
        this.setState({ allBooks: res });
      })
  };

  search = (q) => {
      BooksAPI.search(q).then(res => {
          this.setState({ searchResult: res });
      });
  };

  reset = () => {
    this.setState({ searchResult: [] });
  };

 moveBook = (book, shelf) => {
    console.log("book+++++++", book);
    BooksAPI.update(book, shelf);
    if (shelf === 'none') {
      this.setState(s => ({
        allBooks: s.allBooks.filter(b => b.id !== book.id)
      }));
    } else {
      book.shelf = shelf;
      this.setState(s => ({
       // myBooks: [...prevState.myBooks,book]
       allBooks: s.allBooks.filter(b => {if (b.id !== book.id) {return b}}).concat(book)
      }));
    }
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <MainPage
              bookCase={this.state.bookCase}
              allBooks={this.state.allBooks}
              onMove={this.moveBook}
            />
          )}
        />
        <Route
          path="/searchPage"
          render={() => (
            <SearchPage
              searchBooks={this.state.searchResult}
              myBooks={this.state.allBooks}
              onSearch={this.search}
              onMove={this.moveBook}
              onResetSearch={this.reset}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
