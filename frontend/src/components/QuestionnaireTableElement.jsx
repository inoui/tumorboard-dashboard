import React from 'react';
import QuestionnaireShowDialog from './QuestionnaireShowDialog.jsx'
import QuestionnaireUpdateDialog from './QuestionnaireUpdateDialog.jsx'
import { Glyphicon, Button, Modal } from 'react-bootstrap'

class QuestionnaireTableElement extends React.Component {

  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }

  delete() {
    this.props.deleteQuestionnaire(this.props.questionnaire.id);
  }

  render() {
    return (
      <tr>
        <td>
          {this.props.questionnaire.id}
        </td>
        <td>
          {this.props.questionnaire.title}
        </td>
        <td>
          {this.props.questionnaire.description}
        </td>
        <td>
          <QuestionnaireShowDialog questionnaire={this.props.questionnaire} />
        </td>
        <td>
          <QuestionnaireUpdateDialog 
            questionnaire={this.props.questionnaire}
            onUpdate={this.props.updateQuestionnaire} />
        </td>
        <td>
        <Button onClick={this.delete}>
            <Glyphicon glyph="trash" />
          </Button>
        </td>
      </tr>
    );
  }
}

export default QuestionnaireTableElement;
