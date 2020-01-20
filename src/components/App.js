import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AppNavbar from './NavBar/NavBar';
import LoginForm from './UserAcess/Login';
import LogoutForm from './UserAcess/Logout';

class App extends React.Component {
  render() {
    return (
      <Router>
        <AppNavbar />
        <Switch>
          
          <Route path="/login" component={LoginForm} />
          <Route path="/logout" component={LogoutForm} />
        </Switch>
      </Router>
    );
  }
}

export default App;