import React from 'react';
import './App.css';
import axios from "axios";
import Players from "./components/Players";
import NavBar from "./components/NavBar";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      players: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
    .then(res => {
      console.log(res);
      this.setState({
        players: res.data
      })
      return res.data
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Players players={this.state.players} />
      </div>
    );
  }

  
}

export default App;