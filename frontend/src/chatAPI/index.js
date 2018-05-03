import openSocket from 'socket.io-client';
const socket = openSocket("http://localhost:3001");

function getClientID(){
	socket.emit('register',function(client_id){
		console.log('Client ID: ' + client_id);
	});
}
function sendMessage( client_id, group_id, _msg){
    //socket.emit('chatMessage','clientid','groupid','msg')
    socket.emit('chatMessage',client_id, group_id, _msg);
}

function a(){

}

export {getClientID,sendMessage,a};