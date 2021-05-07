import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainPageButton extends Component {
  render() {
    return (
      <div className="open-search">
        <Link to="searchPage">
          <div>Add a Book</div>
        </Link>
      </div>
    );
};
}

export default MainPageButton;
