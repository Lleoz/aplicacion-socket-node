var socket = io();
socket.on('connect', function(){
    console.log('Conectado al servidor'); 
})

// on escucha información
socket.on('disconnect', function(){
    console.log('Perdida la conexión al servidor'); 
})

// emit envia información
socket.emit('enviarMensaje', {
    nombre: 'Leonardo',
    mensaje: 'Hola mundo'
}, function(resp){
    console.log('Repsuesta server: ', resp);
    
})

//Escuchar información
socket.on('enviarMensaje', function(mensaje){
    console.log(mensaje);
})