import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faProjectDiagram, faKey } from '@fortawesome/free-solid-svg-icons'

class AppNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }
  componentDidMount() {
    const status = localStorage.getItem('isLoggedIn');
    if (status !== null && status === "true"){
      this.setState({
        isLoggedIn: true
      })
    }
  }

  render() {
    const logoutButton = <Nav.Link href="/logout" active={true} style={{color: 'white'}} title="logout">
      <FontAwesomeIcon icon={faKey} size="2x" />
    </Nav.Link>;

    return (
      <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand href="/" title="TeamWork">
          <FontAwesomeIcon icon={faProjectDiagram} size="2x" />
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
        {this.state.isLoggedIn ? logoutButton : null}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default AppNavbar;