import React, {Component} from 'react';

import axios from 'axios';
import Cookies from 'universal-cookie';

import './css/Login.css';

const cookies = new Cookies();

export default class Login extends Component {

    state = {
        client_id : '',
        password : ''

    };

    handleLogin = () => {

        this.props.changePage({page:'ChatApp'});
        console.log("AFTER CHANGED TO CHATAPP");
        cookies.set('client_id', this.state.client_id,{path: '/'});
    }

    handleRegister = () => {
        this.props.changePage({page:'Register'});
    }

    render(){
        return (
            <div className='main-wrapper'>
                <div className='flexbox'>
                    <div className='flexbox-container'>
                        <h2> Login </h2>
                        <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                            <input id="username" type="text" className="form-control" name="Username" placeholder="Username" 
                                onChange = {(event) => {this.setState({client_id : event.target.value})}}
                            />
                        </div>
                        <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                            <input id="password" type="password" className="form-control" name="password" placeholder="Password"
                                onChange = {(event) => {this.setState({password : event.target.value})}}
                            />
                        </div>
                        <div className="input-group">
                            <button className="btn btn-warning" onClick={this.handleRegister}>Register</button>
                            <button className="btn btn-success" onClick={this.handleLogin}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        );
        


    }

}