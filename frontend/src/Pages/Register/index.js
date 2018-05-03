import React, {Component} from 'react';


import {sendRegisterRequest} from '../../chatAPI';

export default class Register extends Component{

    state = {
        username : '',
        password : '',
        display_name : '',
        client_id : ''
    }

    handleSubmit = () => {
        console.log("Submitted !");
        let my_id = sendRegisterRequest();
        console.log(my_id);
        this.setState({client_id : my_id});
        console.log(this.state);
    }

    render(){
        console.log (this.state);
        return (
            <div>
                <h3> Register </h3>
                <div className="input-group">
                    <h5> Username : </h5> <input type="text" onChange={(event) => {this.setState({username:event.target.value})}} placeholder="Username . . ." />
                    <h5> Password : </h5> <input type="password" onChange={(event) => {this.setState({password:event.target.value})}} placeholder="Password . . ." />
                    <h5> Display Name : </h5> <input type="text" onChange={(event) => {this.setState({display_name:event.target.value})}} placeholder="Display Name . . ." />
                </div>
                <div>
                    <button className="btn btn-primary" onClick={this.handleSubmit}>
                        Submit
                    </button>
                </div>
            </div>

        );
    }

}