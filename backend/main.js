var config = require('./config.js');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function(req, res){
    res.send('Hello World');
});

http.listen(config.port1, () => {
  console.log(`Server running at port`,config.port1);
});

io.on('connection', (client) => {
	var currentclientid; //this keep the client id so that the client doesn't have to send his everytime
    client.on('register', function(f) { //f is a function that pass its arguments as a reply to register event
		//generate id for client
		var clientid;
		f(clientid); //id will be pass to the client
		currentclientid = clientid; //write db the id
    });
	client.on('break', function(groupid) {
		//write to db that this client will take a break from this group
	});
	client.on('reconnect', function(clientid,f) {
		//write to db that this client has is already and just come back from a vacation
		//maybe call 'getUnread' for every group the client is in?
	});
	client.on('joinGroup', function(groupid) {
		//write to db that the client wants to join a group
	});
	client.on('createGroup', function(f) {
		//generate a new groupid
		var groupid;
		f(groupid); //same as register event
	});
	client.on('chatMessage', function(groupid,msg) {
		//write to db the msg
		//assume msg is json containing message and timestamp
		io.broadcast.to(groupid).emit('chatMessage',msg); //if don't want to send the message to the sender, change io to client
	});
	client.on('getUnread', function(groupid) {
		//read db for the message in the group unread by the client
		var msgs;
		msgs.forEach(function(msg) {
			client.emit('chatMessage',msg);
		});
	});
	client.on('getGroupList', function() {
		//read db using currentclientid for groups the client is in
		var groupidlist;
		client.emit('groupList',groupidlist);
	});
	client.on('disconnect', function() {
		//break the currentclientid for every group he is in
	});
});