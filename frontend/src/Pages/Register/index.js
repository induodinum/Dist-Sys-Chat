import React, {Component} from 'react';

export default class Register extends Component{

    state = {
        username : '',
        password : '',
        display_name : '',
    }

    handleSubmit = () => {
        console.log("Submitted !");
    }

    render(){
        console.log (this.state);
        return (
            <div>
                <div> Register </div>
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