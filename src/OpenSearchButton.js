import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class OpenSearchButton extends Component {
  render() {
    return (
      <div className="open-search">
        <Link to="search">
          <div>Add a Book</div>
        </Link>
      </div>
    );
};
}

export default OpenSearchButton;
