// create your App component here
import React, { Component } from 'react';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peopleInSpace: []
    };
  }

  componentDidMount(){
    fetch("http://api.open-notify.org/astros.json")
    .then(res => res.json())
    .then(data => this.setState({peopleInSpace:data.people}))
  }

  render() {
    console.log(this.state)
    return (
      <div>
        {this.state.peopleInSpace.map((person, id) => <h1 key={id}>{person.name}</h1>)}
      </div>
    );
  }
}
