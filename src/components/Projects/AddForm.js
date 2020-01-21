import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Application from '../API/API';

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      endDate: ''
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
    const data = this.state;
    Application.request('project/', 'POST', data)
      .then(res => {
        if (res.status === 200) {
          this.props.onAdd();
        }
      }
      )
      .catch(err => {
        alert("something went wrong try again!")
        console.log(err);
      });
  }
  render() {
    return (
      <Form>
        <Form.Group controlId="name">
          <Form.Label>Project Name:</Form.Label>
          <Form.Control type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/>
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Project Description:</Form.Label>
          <Form.Control as="textarea" rows="3" placeholder="Description" name="description" value={this.state.description} onChange={this.handleChange}/>
        </Form.Group>
        <Form.Group controlId="enddate">
          <Form.Label>End date:</Form.Label>
          <Form.Control type="date" name="endDate" value={this.state.endDate} onChange={this.handleChange} />
        </Form.Group>
        <Button variant="outline-secondary" onClick={this.onSubmit}>Add</Button>
      </Form>
    );
  }
}

export default AddForm;
