//Make connection bettwen the server and socket

//Esta variable esta corriendo en el front end
var socket = io.connect('http://localhost:4000');

//Query DOM
var message = document.getElementById('message');
    handle = document.getElementById('handle');
    btn = document.getElementById('send');
    output = document.getElementById('output');
    feedback = document.getElementById('feedback');

//Events
btn.addEventListener('click',function() {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value

    });
});

message.addEventListener('keypress',function() {
    socket.emit('typing',handle.value);
});

//Escuchador para los eventos
socket.on('chat', function(data){
    feedback.innerHTML = "";
    output.innerHTML += '<p><strong>'+ data.handle +':</strong>'+ data.message +'</p>';
});

socket.on('typing', function(data){
    feedback.innerHTML = '<p><em>'+ data + ' está escribiendo...</em></p>';
});