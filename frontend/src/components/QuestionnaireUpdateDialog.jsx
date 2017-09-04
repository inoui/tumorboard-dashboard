import React from 'react';
import { Table, Glyphicon, Button, Modal, Form, FormGroup, Col, ControlLabel, FormControl } from 'react-bootstrap'

class QuestionnaireUpdateDialog extends React.Component {

  constructor(props) {
    super(props)
    this.state= {
      "showDialog" : false,
      "id" : props.questionnaire.id,
      "title" : props.questionnaire.title,
      "description" : props.questionnaire.description
    };
    this.closeDialog = this.closeDialog.bind(this);
    this.showDialog = this.showDialog.bind(this);
    this.inputChanged = this.inputChanged.bind(this);
    this.submit = this.submit.bind(this);
  }

  closeDialog() {
    this.setState({showDialog : false});
  }
  
  showDialog(){
    this.setState({showDialog : true});
  }

  inputChanged(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }

  submit() {
    this.props.onUpdate(this.state.id, this.state.title, this.state.description);
    this.setState({"title" : "", "description" : "", "showDialog" : false})
  }

  render() {
    return (
      <div>
        <Button onClick={this.showDialog}
          bsStyle="default">
            <Glyphicon glyph="edit" />
          </Button>
          <Modal show={this.state.showDialog} onHide={this.closeDialog}>
          <Modal.Header closeButton>
            <Modal.Title>Update Questionnaire</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form horizontal>
                <FormGroup controlId="formId">
                  <Col md={2}>
                    ID
                  </Col>
                  <Col md={10}>
                    <FormControl.Static>
                      {this.state.id}
                      </FormControl.Static>
                  </Col>
                </FormGroup>
                <FormGroup controlId="formTitle">
                  <Col md={2}>
                    Title
                  </Col>
                  <Col md={10}>
                    <FormControl
                      type="text"
                      name="title"
                      value={this.state.title}
                      placeholder="Enter title"
                      onChange={this.inputChanged}
                      />
                  </Col>
                </FormGroup>
                <FormGroup controlId="formDescription">
                  <Col md={2}>
                    Description
                  </Col>
                  <Col md={10}>
                     <FormControl
                      type="text"
                      name="description"
                      value={this.state.description}
                      placeholder="Enter description"
                      onChange={this.inputChanged}
                      />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Col mdPush={10} md={2} className="text-right">
                    <Button bsStyle="default" onClick={this.submit}>Update</Button>
                  </Col>
                </FormGroup>
             </Form>
          </Modal.Body>
          <Modal.Footer>
            
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default QuestionnaireUpdateDialog;
