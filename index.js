var express = require('express');

//Esta variable esta corriendo en el back end / server
var socket = require('socket.io');
//App setup
var app = express();
var server = app.listen(4000,function(){
    console.log('Listening to request on port 4000');
});

//Static files
app.use(express.static('public'));

//Socket setup
var io = socket(server);


io.on('connection', function(socket){
    console.log('Made socket connection', socket.id);
   
    socket.on('chat',function(data){
        io.sockets.emit('chat', data);
    });

    socket.on('typing',function(data){
        socket.broadcast.emit('typing', data);
    });
});