import React from 'react';
import { Redirect } from "react-router-dom";
import Application from '../API/API';
import ProjectList from './ProjectList';
import ProjectAdd from './ProjectAdd';
import { Jumbotron } from 'react-bootstrap';
import ProjectCard from './ProjectCard';

class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: [],
    }
    this.getProjects = this.getProjects.bind(this)
  }

  componentDidMount() {
    this.getProjects();
  }

  getProjects() {
    Application.request('project/', 'GET')
      .then(res => {
        if (res.status === 200) {
          res.json()
            .then(data => this.setState({ projects: data }))
        }
      })
      .catch(err => {
        console.log(err);
        alert("Something went wrong try again!");
      });
  }
  render() {
    if (!this.props.isLoggedIn) {
      return <Redirect to="/login" />;
    }

    return (
        <div>
          <div className="container pt-3">
          <ProjectList projects={this.state.projects} />
          </div>
          <ProjectAdd onAdd={this.getProjects}/>
        </div>
    );
  }
}

export default Projects;