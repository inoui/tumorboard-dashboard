import React from 'react';
import { Glyphicon, Nav, NavItem } from 'react-bootstrap'


class Footer extends React.Component {

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
