import React, { Component } from "react";

export default class Toggle extends Component {
  constructor(props) {
    super(props);

    this.state = { isToggleOn: true };
    //1. Constructor Binding
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => {
      return { isToggleOn: !state.isToggleOn };
    });
  }

  // 5. Arrow Function in Class Property
  logClick = () => {
    // This works because arrow funcs adopt the this binding of the enclosing scope.
    console.log(this.state.isToggleOn);
  };

  render() {
    return (
      <div>
        {/* 1. Constructor Binding */}
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>
        {/*2. Arrow Function in Render */}
        <button onClick={() => this.handleClick()}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>
        {/*3. Bind in Render */}
        <button onClick={() => this.handleClick.bind(this)}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>
        {/*5. Arrow Function in Class Property*/}
        <button onClick={this.logClick} />
      </div>
    );
  }

  // 4. Use React.createClass
}
