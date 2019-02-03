import React, { Component } from "react";
import "./App.css";
import { DatePicker } from "antd";
import Clock from "./Clock";
import Toggle from './Toggle';

const name = "Developer";
const intro = <h1>Hello , {name} </h1>;
const userName = { firstName: "Mahesh", lastName: "Patel" };
const customElement = <Welcome name="Mahesh" />;
const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    name: "Hello Kitty",
    avatarUrl: "https://placekitten.com/g/64/64"
  }
};

function formatName(user) {
  return user.firstName + " " + user.lastName;
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
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}

function handleClick(e) {
  e.preventDefault();
  console.log("The link was clicked.");
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <DatePicker />
        {/*   Constant   */}
        {intro}
        {/*   Expression   */}
        {7 * 8}
        <br />
        {/*   Function   */}
        {formatName(userName)}
        {/*   Conditional   */}
        {getGreeting()} <br />
        {getGreeting(userName)}
        {currentDate()}
        {/*   Components   */}
        {customElement}
        <Welcome name="Mahesh" />
        <Welcome name="Patel" />
        <Comment
          date={comment.date}
          text={comment.text}
          author={comment.author}
        />

        <button onClick={handleClick}> Click me</button>
        <Toggle />

        <Clock/>
        <Clock/>
        <Clock/>

      </div>
    );
  }
}

export default App;
