import openSocket from 'socket.io-client';
const socket = openSocket("http://localhost:3001");

function sendMessage( client_id, group_id, _msg){
    //socket.emit('chatMessage','clientid','groupid','msg')
    socket.emit('chatMessage',client_id, group_id, _msg);
}

function a(){

}

export {sendMessage,a};