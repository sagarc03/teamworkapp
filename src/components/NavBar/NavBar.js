import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faProjectDiagram, faKey } from '@fortawesome/free-solid-svg-icons'

class AppNavbar extends React.Component {
  render() {
    const logoutButton = <Button variant="Link" onClick={this.props.logout} active={true} style={{color: 'white'}} title="logout">
      <FontAwesomeIcon icon={faKey} size="2x" />
    </Button>;

    return (
      <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand href="/" title="TeamWork">
          <FontAwesomeIcon icon={faProjectDiagram} size="2x" />
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
        {this.props.isLoggedIn ? logoutButton : null}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default AppNavbar;