import React from 'react';
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { Panel } from 'react-bootstrap'

class BoxContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      boxes : []
    }
    this.createRestful = this.createRestful.bind(this);
    this.updateRestful = this.updateRestful.bind(this);
    this.deleteRestful = this.deleteRestful.bind(this);
    this.reload = this.reload.bind(this);
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
    .then(box => {
      var newboxes = this.state.boxes;
      newboxes[newboxes.length] = { "id" : box.id, "title" : box.title, "description" : box.description};
      this.setState({"boxes" : newboxes });
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
    .then(box => {
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
    if (this.state.boxes.length == 0) {
      this.reload();
    }
  }

  render() {
    return (
      <div>
            {this.state.boxes.map((box) =>
              <Panel header={box.title}  key="{box.id}">
               {box.description}
              </Panel>
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
    .then(response => {
      console.log(response);
      return response.json()
    })
    .then(boxes => {  // handle boxes object
      console.log(boxes)
      this.setState({"boxes" : boxes});
    })
    .catch(error => { // handle error
        console.log("an error occurred!" + error);
    });
  }

}

export default BoxContainer;