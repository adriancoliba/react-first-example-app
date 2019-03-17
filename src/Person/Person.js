import React from 'react';
import "./Person.css";

const person = (props) => {
    return (
        <div class="Person">
            <h3>My name is is: {props.name}</h3>
            <h3>My age is: {props.age}</h3>
            <h4 onClick={props.click}>Cant seem to remember my age</h4>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.age}></input>
        </div>
    )
    
}

export default person;