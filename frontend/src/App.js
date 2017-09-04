import React from 'react';
/*import logo from './logo.svg';*/
/*import './App.css';*/
import BoxContainer from './components/BoxContainer.jsx'
import Loader from './components/Loader.jsx'
import 'bootstrap/dist/css/bootstrap.css'; 

class App extends React.Component {

  constructor() {
    super()
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
      console.log(properties.url);
      url = properties.url;
      console.log("setting state: " + url);
      this.setState({ resturl : url });
    })
    .catch(error => { // handle error
        console.log("an error occurred! " + error);
    });
  }

  getComponent() {
    console.log("getting component: " + this.state.resturl);
    if (this.state.resturl == "") {
      return <Loader />;
    } else {
      return <BoxContainer resturl={this.state.resturl} />
    }
  }

  render() {
    return (
      <div className="App">
        { this.getComponent() }
      </div>
    );
  }
}

export default App;
