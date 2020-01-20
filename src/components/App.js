import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AppNavbar from './NavBar/NavBar';
import LoginForm from './UserAcess/Login';
import Projects from './Projects/Projects';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
    this.logout = this.logout.bind(this)
    this.login = this.login.bind(this)
  }

  componentDidMount() {
    if (!this.state.isLoggedIn && localStorage.getItem('jwttoken') !== null) {
      this.setState({
        isLoggedIn: true
      });
    }
  }

  logout(event) {
    localStorage.clear();
    this.setState({
      isLoggedIn: false
    });
  }

  login(data) {
    console.log("this clear")
    localStorage.setItem('jwttoken', data['access']);
    this.setState({
      isLoggedIn: true
    });
  }

  render() {
    return (
      <Router>
        <AppNavbar isLoggedIn={this.state.isLoggedIn} logout={this.logout} />
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Projects{...props} isLoggedIn={this.state.isLoggedIn} />}
          />
          <Route
            path="/login"
            render={props => <LoginForm {...props} isLoggedIn={this.state.isLoggedIn} login={this.login} />}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;