import React from 'react';
import Application from '../API/API';
import pick from 'lodash/pick';
import { Form, Button, Jumbotron } from 'react-bootstrap';
import { Redirect } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(event) {
    this.setState(
      {
        [event.target.name]: event.target.value
      }
    )
  }

  onSubmit(event) {
    event.preventDefault();
    const credentials = pick(this.state, ['username', 'password']);
    if(this.state.username === '' || this.state.password === '') {
      alert('Please complete all fields');
    } else {
      Application.request('token/', 'POST', credentials)
        .then(res => this.saveToken(res))
        .catch(err => console.log(err));
    }
  }

  saveToken(res) {
    if (res.status === 200) {
      console.log(res)
      res.json()
        .then(data => { this.props.login(data) });
    } else {
      alert("Something went wrong try again!");
    }
  }

  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to="/" />;
    }
    return <div className="container pt-5 col-lg-4 col-md-5 col-sm-6">
      <Jumbotron>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
          </Form.Group>
          <Button variant="secondary" type="submit" block>Submit</Button>
        </Form>
      </Jumbotron>
    </div>;
  }
}

export default LoginForm;