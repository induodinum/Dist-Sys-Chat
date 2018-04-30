var config = require('./config.js');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function(req, res){
    res.send('WTF');
});


app.listen(3001, () => {
  console.log(`Server running at port 3001`);
});

io.on('connection', (client) => {
    
    
    
});