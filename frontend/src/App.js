import React from 'react';
/*import logo from './logo.svg';*/
/*import './App.css';*/
import BoxContainer from './components/BoxContainer.jsx'
import Loader from './components/Loader.jsx'
import 'bootstrap/dist/css/bootstrap.css'; 

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { "resturl" : "" };
    this.getComponent = this.getComponent.bind(this);
  }

  componentDidMount() {
    var request = new Request("application.properties", {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });

    var url = "";
    fetch(request)
    .then(response => {
      return response.json();
    })
    .then(properties => {
      url = properties.url;
      this.setState({ resturl : url });
    })
    .catch(error => { // handle error
        console.log("an error occurred! " + error);
    });
  }

  getComponent() {
    if (this.state.resturl === "") {
      return <Loader />;
    } else {
      return <BoxContainer resturl={this.state.resturl} />
    }
  }

  /* TODO: the jquery import does not belong here! */
  render() {
    return (
      <div className="App">
        { this.getComponent() }
      </div>
    );
  }
}

export default App;
