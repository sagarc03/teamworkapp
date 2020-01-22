import React from 'react';
import Application from '../API/API';

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: [],
      tasks: []
    }
    this.getTasks = this.getTasks.bind(this);
    this.getProject = this.getProject.bind(this);
  }


  componentDidMount() {
    if (this.props.match['params']['id'] !== undefined){
      this.getProject();
      this.getTasks();
    }
  }
  
  getProject() {
    const id = this.props.match.params.id;
    const url = `project/${id}`
    Application.request(url, 'GET')
    .then(res => {
      if (res.status === 200) {
        res.json()
          .then(data => this.setState({ project: data }))
      }
    })
    .catch(err => {
      console.log(err);
      alert("Something went wrong try again!");
    });
  }

  getTasks() {
    const id = this.props.match.params.id;
    const url = `project/${id}/tasks/`
    Application.request(url, 'GET')
    .then(res => {
      if (res.status === 200) {
        res.json()
          .then(data => this.setState({ tasks: data }))
      }
    })
    .catch(err => {
      console.log(err);
      alert("Something went wrong try again!");
    });
  }

  render() {
    if(this.state.project.length <= 0) {
      return null;
    }
    return <h1>This is project view</h1>;
  }
}

export default Project;