import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

//import {sendMessage} from './chatAPI';
//import { sendMessage } from 'myAPI';

import ChatApp from './Pages/ChatApp';
import Login from './Pages/Login';
import Register from './Pages/Register';


class App extends Component {
  state = {

    page : 'Login'

  }
  /*
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
  */

  changePage = (props) => {
    this.setState({
      page:props.page
    });
    //console.log(this.state);
  }

  render(){
    if (this.state.page === 'Login'){
      //sendMessage(9158,44, 'test msg');
      return (
        <Login changePage={this.changePage}/>
      );
    }else if (this.state.page === 'Register'){
      return (
        <Register/>
      );
    }else if (this.state.page === 'ChatApp'){
      return (
        <ChatApp/>
      );
    }

  }
}

export default App;
