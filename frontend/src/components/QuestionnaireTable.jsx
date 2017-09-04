import React from 'react';
import QuestionnaireTableElement from './QuestionnaireTableElement.jsx'
import { Table } from 'react-bootstrap'

class QuestionnaireTable extends React.Component {

  constructor(props) {
    super(props);
    console.log(props)
  }

  render() {
    return (
      <div>
        <Table hover={true} >
          <tbody>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>description</th>
              <th></th>
              <th></th>
            </tr>
            {this.props.questionnaires.map((questionnaire) =>
              <QuestionnaireTableElement
                questionnaire={questionnaire}
                key={questionnaire.id}
                updateQuestionnaire={this.props.updateQuestionnaire}
                deleteQuestionnaire={this.props.deleteQuestionnaire} />
            )}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default QuestionnaireTable;
