import React, { Component } from 'react';
import './App.css';

const name = 'Mahesh Patel';
const data = <h1>Hello, {name}</h1>;


const user = {
  firstName: 'Mahesh',
  lastName: 'Patel',
  avatarUrl: 'https://d2x5ku95bkycr3.cloudfront.net/App_Themes/Common/images/profile/0_200.png'
};

const image = <img alt="profile pitcure" src={user.avatarUrl} />;


function formatName(user) {  
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}


class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hello World</h1>
        </header>
       
          {data}
       

      <h1>Hello, {formatName(user)}! </h1>
      {getGreeting()}
      {image}
    
      </div>



    );
  }
}



export default App;
