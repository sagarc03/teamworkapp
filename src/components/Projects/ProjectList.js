import React from 'react';
import ProjectCard from './ProjectCard';
import { CardDeck } from 'react-bootstrap';
class ProjectList extends React.Component {

  render() {
    let projects;
    if (this.props.projects !== undefined && this.props.projects.length > 0) {
      projects = this.props.projects.map(project => <ProjectCard project={project} key={project.id} />);
    } else {
      projects = null;
    }

    return <div className="row">
      {projects}
    </div>;
  }
  
}

export default ProjectList;