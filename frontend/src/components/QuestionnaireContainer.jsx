import React from 'react';
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import QuestionnaireCreateDialog from './QuestionnaireCreateDialog.jsx'
import QuestionnaireTable from './QuestionnaireTable.jsx'

class QuestionnaireContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      /*"qs" : [
        { 'id': 1, 'title': 'Test Title 1', 'description': 'Test Description 1' },
        { 'id': 2, 'title': 'Test Title 2', 'description': 'Test Description 2' },
        { 'id': 3, 'title': 'Test Title 3', 'description': 'Test Description 3' },
        { 'id': 4, 'title': 'Test Title 4', 'description': 'Test Description 4' },
        { 'id': 5, 'title': 'Test Title 5', 'description': 'Test Description 5' }
      ]*/
      "qs" : []
    }
    this.createRestful = this.createRestful.bind(this);
    this.computeNextId = this.computeNextId.bind(this);
    this.updateRestful = this.updateRestful.bind(this);
    this.deleteRestful = this.deleteRestful.bind(this);
    this.reload = this.reload.bind(this);
  }

  create(title, description) {
    var id = this.computeNextId();
    var questionnaire = {
       "id" : id,
       "title" : title,
       "description" : description
    }
    var newQs = this.state.qs;
    newQs[newQs.length+1] = questionnaire;
    this.setState({"qs" : newQs});
  }

  computeNextId() {
    return this.state.qs[this.state.qs.length - 1].id + 1
  }

  createRestful(title, description) {
    var request = new Request(this.props.resturl, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify ({"title" : title, "description" : description })
    });

    fetch(request)
    .then(response => 
        response.json()
    )
    .then(questionnaire => {
      var newQs = this.state.qs;
      newQs[newQs.length] = { "id" : questionnaire.id, "title" : questionnaire.title, "description" : questionnaire.description};
      this.setState({"qs" : newQs });
    })
    .catch(error => { // handle error
        console.log("an error occurred!" + error);
    });
  }

  update(id, title, description) {
    var updatingQuestionnaire = this.state.qs.find(q => q.id == id);
    var index = this.state.qs.indexOf(updatingQuestionnaire);
    var newQs = this.state.qs;
    newQs[index] = {"id" : id, "title" : title, "description" : description};
    this.setState({"qs" : newQs});
  }

  updateRestful(id, title, description) {
    var request = new Request(this.props.resturl + "/" + id, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify ({"id" : id, "title" : title, "description" : description })
    });

    fetch(request)
    .then(response => 
        response.json()
    )
    .then(questionnaire => {
      this.reload();
    })
    .catch(error => { // handle error
        console.log("an error occurred!" + error);
    });
  }

  delete(id) {
    var qs = this.state.qs.filter(q => q.id != id);
    this.setState({"qs" : qs});
  }

  deleteRestful(id) {
    var request = new Request(this.props.resturl + "/" + id, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });

    fetch(request)
    .then(response => {
      if (response.ok) {
        this.reload()
      }
    })
  }

  componentDidMount() {
    if (this.state.qs.length == 0) {
      this.reload();
    }
  }

  render() {
    return (
      <div>
        <Header />
        <QuestionnaireCreateDialog 
          onCreate={this.createRestful}
         />
        <QuestionnaireTable
          questionnaires={this.state.qs}
          updateQuestionnaire={this.updateRestful}
          deleteQuestionnaire={this.deleteRestful}
          />
        <Footer
          amountOfQuestionnaires={this.state.qs.length}
        />
      </div>
    );
  }

  reload() {
    var request = new Request(this.props.resturl, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });

    fetch(request)
    .then(response =>  response.json() )
    .then(questionnaires => {  // handle questionnaires object
      this.setState({"qs" : questionnaires});
    })
    .catch(error => { // handle error
        console.log("an error occurred!" + error);
    });
  }

}

/*QuestionnaireContainer.defaultProps = {
  qs: [
    { 'id': 1, 'title': 'Test Title 1', 'description': 'Test Description 1' },
    { 'id': 2, 'title': 'Test Title 2', 'description': 'Test Description 2' },
    { 'id': 3, 'title': 'Test Title 3', 'description': 'Test Description 3' },
    { 'id': 4, 'title': 'Test Title 4', 'description': 'Test Description 4' },
    { 'id': 5, 'title': 'Test Title 5', 'description': 'Test Description 5' }
  ]
}*/

export default QuestionnaireContainer;