import React from 'react';
import { Redirect } from "react-router-dom";

class LogoutForm extends React.Component {
  render() {
    localStorage.removeItem('jwttoken');
    localStorage.removeItem('isLoggedIn');
    
    return <Redirect to="/" />;
  }
}

export default LogoutForm;