import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
    this.setState({page:props.page});
  }

  render(){
    if (this.state.page === 'Login'){
      return (
        <Login/>
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
