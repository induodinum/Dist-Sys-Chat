import React, {Component} from 'react';

import axios from 'axios';

import './css/Login.css';

export default class Login extends Component {

    state = {


    };

    handleLogin = () => {



    }

    render(){
        return (
            <div className='flexbox'>
                <div className='flexbox-container'>
                    <div> Login </div>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                        <input id="username" type="text" className="form-control" name="Username" placeholder="Username"></input>
                    </div>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                        <input id="password" type="password" className="form-control" name="password" placeholder="Password"></input>
                    </div>
                    <div>
                    <button className="btn btn-success" onClick={this.props.handleLogin}>Login</button>
                    </div>
                </div>
            </div>
        );
        


    }

}