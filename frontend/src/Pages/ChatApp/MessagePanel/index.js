import React, {Component} from 'react';

import {sendMessage} from '../../../socketAPI';

import './css/MessagePanel.css';

export default class MessagePanel extends Component{

    state = {
        message : ''
    }

    handleSend = () => {
        console.log(this.state.message);
        //sendMessage(9158, 44, 'kkk');
        sendMessage(9158, 44, this.state.message);
    }

    handleEnter = (event) => {
        if (event.key === 'Enter'){
            this.handleSend();
        }
    }

    render(){
        //console.log(this.state);
        //sendMessage(9158, 44, 'kkk');
        return (
            <div className="message-panel">
                <div className="row">
                    <div className="col-sm-10">
                        <input id="messageBox" type="text" className="form-control" name="MessageBox" 
                        onChange = { 
                            (event) => {
                                this.setState({message : event.target.value});
                            }
                        }
                        onKeyPress={this.handleEnter}
                        placeholder="Message . . ." />
                    </div>
                    <div className="col-sm-2">
                        <button className="btn btn-success" onClick={this.handleSend}>Send</button>
                    </div>
                </div>
            </div>
        );
    }

}