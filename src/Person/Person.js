import React from 'react';
import styyles from './Person.module.css';

const person = ( props ) => {
    
    return (
        <div className={styyles.Person}>
            <p>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
            <button onClick={props.click}>Delete person</button>
        </div>
    )
};

export default person;