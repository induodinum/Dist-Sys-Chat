import React, {Component} from 'react';

import './css/MessagePanel.css';

export default class MessagePanel extends Component{

    state = {
        message : ''
    }

    handleSend = () => {

    }

    render(){
        console.log(this.state);
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