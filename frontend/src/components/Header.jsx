import React from 'react';
import { Jumbotron } from 'react-bootstrap'


class Header extends React.Component {

  render() {
    return (
      <Jumbotron>
          <h1>Flashcard Client with React</h1>
          <p>using server 'Flashcard-mvc'</p>
      </Jumbotron>
    );
  }
}

export default Header;
