import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    myBooks:[],
    bookshelves:[
      { key: 'currentlyReading', name: 'Currently Reading' },
      { key: 'wantToRead', name: 'Want to Read' },
      { key: 'read', name: 'Read' },
    ],
    searchBooks: [],
    error: false
  }
  };

  componentDidMount = () => {
    BooksAPI.getAll()
      .then(books => {
        this.setState({ myBooks: books });
      })
      .catch(err => {
        this.setState({ error: true });
        console.log("Error in getAll(): ", err);
      });
  };

  searchForBooks = (query) => {
    if (query.length > 0) {
      BooksAPI.search(query).then(books => {
        if (books.error) {
          this.setState({ searchBooks: [] });
        } else {
          this.setState({ searchBooks: books });
        }
      });
    } else {
      console.log("The query length <= 0 ");
      this.setState({ searchBooks: [] });
    }
  };

  resetSearch = () => {
    this.setState({ searchBooks: [] });
  };

 moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf).catch(err => {
      console.log(err);
      this.setState({ error: true });
    });
    if (shelf === 'none') {
      this.setState(prevState => ({
        myBooks: prevState.myBooks.filter(b => b.id !== book.id)
      }));
    } else {
      console.log("++++++++book object: ", book);
      console.log("++++++++shelf: destination shelf: ", shelf);
      console.log("++++++++book.shelf: previous shelf: ", book.shelf);
      book.shelf = shelf;
      this.setState(prevState => ({
       // myBooks: [...prevState.myBooks,book]
       myBooks: prevState.myBooks.filter(b => {if (b.id !== book.id) {return b}}).concat(book)
      }));
    }
  };

  render() {
    const { myBooks, searchBooks, error,bookshelves } = this.state;
    if (error) {
      return <div>Network error. Please try again later.</div>;
    }
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <ListBooks
              bookshelves={bookshelves}
              books={myBooks}
              onMove={this.moveBook}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchBooks
              searchBooks={searchBooks}
              myBooks={myBooks}
              onSearch={this.searchForBooks}
              onMove={this.moveBook}
              onResetSearch={this.resetSearch}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
