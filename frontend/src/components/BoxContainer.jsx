import React from 'react';
import Header from './Header.jsx'
import Footer from './Footer.jsx'

class BoxContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
    this.createRestful = this.createRestful.bind(this);
    this.computeNextId = this.computeNextId.bind(this);
    this.updateRestful = this.updateRestful.bind(this);
    this.deleteRestful = this.deleteRestful.bind(this);
    this.reload = this.reload.bind(this);
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
            {this.state.boxes.map((box) =>
              <div style="border: 1px solid black; height: 100px; width: 100px">
                <h1>{box.title}</h1>
                <p>{box.description}</p>
              </div>
            )}
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
    .then(boxes => {  // handle boxes object
      this.setState({"qs" : boxes});
    })
    .catch(error => { // handle error
        console.log("an error occurred!" + error);
    });
  }

}

export default BoxContainer;