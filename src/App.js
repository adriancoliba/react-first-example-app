import React, { Component } from 'react';
import styyles from './App.module.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'dfg5', name: 'Max', age: 28 },
      { id: 'dfga', name: 'Manuuu', age: 29 },
      { id: 'dfg3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });
  
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  }

  deletePersonHandler = (index) => {
    const persons = this.state.persons.slice();
    persons.splice(index, 1);
    this.setState({persons: persons})

  }

  togglePersonsHandler = () => {
    let doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render () {
  
  let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              key={person.id}/>
          })
          }
        </div> 
      )
      
    }

    const classes =[];
    if(this.state.persons.length <= 2){
      classes.push(styyles.red);
    }
    if(this.state.persons.length <=1){
      classes.push(styyles.bold);
    }
    if(this.state.persons.length <=0){
      classes.push(styyles.bigger);
    }
     
    return (
      <div className={styyles.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
          onClick={this.togglePersonsHandler}>Show/Hide people
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
