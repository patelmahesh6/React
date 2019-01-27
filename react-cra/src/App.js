import React, { Component } from 'react';
import './App.css';
import { DatePicker } from 'antd';


const name = 'Developer';
const intro = <h1>Hello , {name} </h1>;
const userName = { firstName: 'Mahesh', lastName: 'Patel' }
const customElement = <Welcome name="Mahesh" />;
const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};


function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

function currentDate() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  return element;
}

function formatDate(date) {
  return date.toLocaleDateString();
}

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />

  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}




/*

 React DOM uses camelCase property naming convention instead of HTML attribute names.
 For example, class becomes className in JSX, and tabindex becomes tabIndex.

 React elements are immutable. Once you create an element, you can’t change its children or attributes

 Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

 React treats components starting with lowercase letters as DOM tags. 

Props are Read-Only
In ReactJS we use props to send data to components.
In ReactJS every component is treated as a pure javascript function.
In ReactJS props are equivalent to parameters of a pure javascript function.
Props are immutable. Because these are developed in the concept of pure functions. In pure functions we cannot change the data of parameters. So, also cannot change the data of a prop in ReactJS.

Stateless ReactJS Component
All function based components can be considered as stateless ReactJS components.
Stateless ReactJS Components are pure javascript functions so, we don’t need to have state.


Stateful ReactJS Component
All class based components can be considered as stateful ReactJS components.
Stateful ReactJS Components inherits the class React.Component so, state get’s inherited.


*/


class App extends Component {
  render() {

    return (
     
      <div className="App"  >

        <DatePicker />
        {/*   Constant   */}
        {intro}

        {/*   Expression   */}
        {7 * 8}
        <br></br>

        {/*   Function   */}
        {formatName(userName)}

        {/*   Conditional   */}
        {getGreeting()} <br></br>
        {getGreeting(userName)}

        {currentDate()}
      
        {/*   Components   */}
        {customElement}

        <Welcome name="Mahesh" />
        <Welcome name="Patel" />

        <Comment
          date={comment.date}
          text={comment.text}
          author={comment.author} />

      </div>
    );
  }
}


export default App;
