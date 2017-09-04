import React from 'react';
import { Button, Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap'


class Footer extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Nav bsStyle="pills" activeKey={this.props.currentClient}>
        {this.props.clients.map((client) =>
          <NavItem eventKey={client} href="#" key={client} >
                {client}
                &nbsp;
                <a href="#" >
                  <Glyphicon glyph="remove-circle" />
                </a>
          </NavItem>
        )}
        <NavItem>
          <Glyphicon glyph="plus" />
        </NavItem>
      </Nav>
    );
  }
}

export default Footer;
