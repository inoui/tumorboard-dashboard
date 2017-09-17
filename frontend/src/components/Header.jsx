import React from 'react';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap'


class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
       <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">
              <span><Glyphicon glyph="user" /> {this.props.username}</span>
              <span>{this.props.currentConfiguration}</span>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              <Glyphicon glyph="print" />
            </NavItem>
            <NavItem eventKey={2} href="#">
              <Glyphicon glyph="transfer" />
            </NavItem>
            <NavItem eventKey={3} href="#">
            <Glyphicon glyph="plus-sign" />
            </NavItem>
            <NavItem eventKey={4} href="#">
              <Glyphicon glyph="menu-hamburger" />
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
