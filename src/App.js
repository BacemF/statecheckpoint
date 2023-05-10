import "./App.css";
import Name from "./Components/Name";

import React, { Component } from "react";

export default class App extends Component {
  state = {
    Person: {
      fullName: "Bacem FARHAT",
      bio: "---",
      imgSrc: "mon image",
      profession: "xxxxxxxxx",
    },
    shows: true,
    newName:"***"
  };
  cond = () => this.setState({ shows: !this.state.shows });
  delet = (effacer) => this.setState({Person: delete this.state.Person.fullName});
  addd= (ajout) => this.setState({newName:ajout});
  render() {
    return (
      <div className="App">
        <button onClick={this.cond}>Show</button>
        <Name newName={this.state.newName} addd={this.addd}/>
       { this.state.shows&&
        <>
          <h2>My fullName is {this.state.Person.fullName} </h2>
          <button onClick={this.delet}>Delete</button>
          <h2>Bio : {this.state.Person.bio} </h2>
          <h2>Mon image : {this.state.Person.imgSrc} </h2>
          <h2>Mon profession : {this.state.Person.profession} </h2>
          {this.state.cond}
        </>
        }
      </div>
    );
  }
}
