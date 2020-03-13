import React from 'react';
import './App.css';
import axios from "axios";
import Players from "./Components/Players";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      players: [],
      search: ''
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

  // changeHandler = e=> {
  //   this.setState({
  //     search: e.target.value
  //   })
  //   console.log(this.state.search)
  // }

  // formHandler = e =>{
  //   e.preventDefault();
  //   const setSearch = this.state.search;
  //   axios.get(`https://api.github.com/users/${setSearch}`)
  //   .then(res=> {
  //     this.setState({
  //       main: res.data
  //     })
  //     return res.data.followers_url
  //   })
  //   .then(res => {
  //     axios.get(res)
  //     .then(res => {
  //       this.setState({
  //         followers: res.data
  //       })
  //     })
  //   })
  // }

  render() {
    return (
      <div className="App">
        <p>My app lives here</p>
        <Players players={this.state.players} />
      </div>
    );
  }

  
}

export default App;