import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";


class App extends Component {
  state = {
    ages: [
      {age: "??", name: "adrian"},
      {age: "??", name: "cristian"}
    ]
  }

  switchNameHandler = (value, name) => {
    console.log("Was clicked")
    this.setState({
      ages: [
        {age: value, name: name},
        {age: 35, name: "CristiaN"},

      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      ages: [
        {age: event.target.value, name: "adrian"},
        {age: 35, name: "CristiaN"},

      ]
    })
  }
  
  render() {
    const style = {
      backgroundColor: "cadetblue",
      font: "inherit",
      border: "2px solid aquamarine",
      padding: "7px",
      color: "aqua",
      cursor: "pointer",
    }

    return (
      <div className="App">

        <h1>Hi, I'm Adrian C.</h1>
        <button 
          style={style}
          onClick={() => this.switchNameHandler(10, "hadria")}>Click to show age
        </button>
        <h3 className="redName">still {this.state.ages[0].name}</h3>
        <Person
          name={this.state.ages[0].name}
          age={this.state.ages[0].age}
          click={this.switchNameHandler.bind(this, 15, "HADRIA")}
          changed={this.nameChangeHandler}> ------
        </Person> 
        <Person 
          name={this.state.ages[1].name}
          age={this.state.ages[1].age}> My hobbies are
        </Person>

      </div>
    );
  }
}

export default App;
