import React from 'react';
import { Table, Glyphicon, Button, Modal, Form, FormGroup, Col, ControlLabel, FormControl } from 'react-bootstrap'

class QuestionnaireShowDialog extends React.Component {

  constructor(props) {
    super(props)
    this.state= {
      showDialog : false
    };
    this.close = this.close.bind(this);
    this.show = this.show.bind(this);
  }

  close() {
    this.setState({showDialog : false});
  }
  
  show(){
    this.setState({showDialog : true});
  }

  render() {
    return (
      <div>
        <Button onClick={this.show}>
            <Glyphicon glyph="zoom-in" />
          </Button>
          <Modal show={this.state.showDialog} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Questionnaire</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form horizontal>
                <FormGroup controlId="formTitle">
                  <Col componentClass={ControlLabel} md={2}>
                    Title
                  </Col>
                  <Col md={10}>
                    <FormControl.Static>
                      {this.props.questionnaire.title}
                    </FormControl.Static>
                  </Col>
                </FormGroup>
                <FormGroup controlId="formDescription">
                  <Col componentClass={ControlLabel} md={2}>
                    Description
                  </Col>
                  <Col md={10}>
                    <FormControl.Static>
                      {this.props.questionnaire.description}
                    </FormControl.Static>
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Col mdPush={10} md={2} className="text-right">
                    <Button bsStyle="default" onClick={this.close}>Close</Button>
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

export default QuestionnaireShowDialog;
