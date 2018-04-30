import React, {Component} from 'react';

import ChatPanel from './ChatPanel';
import MessagePanel from './MessagePanel';

export default class ChatApp extends Component{

    render(){
        //<div> ChatApp </div>
        return (
            <div>
                <ChatPanel />
                <MessagePanel />
            </div>
        );

    }

}