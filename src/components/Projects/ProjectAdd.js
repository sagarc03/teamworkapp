import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import AddForm from './AddForm';


class ProjectAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.hanldeShow = this.hanldeShow.bind(this);
    this.hanldeClose = this.hanldeClose.bind(this);
  }

  hanldeShow() {
    this.setState({
      show: true
    })
  }

  hanldeClose() {
    this.setState({
      show: false
    })
  }

  render() {
    return (
      <div className="fixed-bottom text-right px-5 py-5">
        <Button variant='Link' onClick={this.hanldeShow} >
          <FontAwesomeIcon icon={faPlusCircle} size="3x" title="Add Project" />
        </Button>
        <Modal
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.state.show}
          onHide={this.hanldeClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Project</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddForm onAdd={this.props.onAdd}/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.hanldeClose} variant="secondary" block>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ProjectAdd;