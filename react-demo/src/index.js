import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './Clock';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
 
ReactDOM.render(<Clock />,document.getElementById('root'));

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>{number * 2}</li>
);

ReactDOM.render(
    <ul>{listItems}</ul>,
    document.getElementById('root')
  );
/*

function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
  }
  
  setInterval(tick, 1000);
*/


  /*function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
  function WelcomeApp() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
      </div>
    );
  }

  
  ReactDOM.render(
    <WelcomeApp  />,
    document.getElementById('root')
  );*/


registerServiceWorker();
