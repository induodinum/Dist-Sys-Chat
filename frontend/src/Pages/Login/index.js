import React, {Component} from 'react';

import axios from 'axios';

export default class Login extends Component {

    state = {


    };

    handleLogin = () => {



    }

    render(){
        return (
            <div>
            <div> Login </div>
            <button className="btn btn-success" onClick={this.props.handleLogin}>Login</button>
            </div>
        );
        


    }

}