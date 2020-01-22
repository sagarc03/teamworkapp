import React from 'react';
import ProjectList from './ProjectList';
import { Card, Button } from 'react-bootstrap';

class ProjectCard extends React.Component {
  render() {
    if (this.props.project === undefined) {
      return null;
    }
    return (
      <div className="pb-4 col-lg-4 col-md-6 col-sm-12">
        <Button variant="Link" href={`/${this.props.project.id}`}>
          <Card bg="light" border="secondary" style={{ width: '20rem' }}>
            <Card.Body>
              <Card.Title>{this.props.project.name}</Card.Title>
              <Card.Text>{this.props.project.description}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">End Date: {this.props.project.endDate}</Card.Footer>
          </Card>
        </Button>
      </div>);
  }
}

export default ProjectCard;