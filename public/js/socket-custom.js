var socket = io();

//on: escuchar
socket.on('connect', function(){

    console.log('Conectado al servidor');
});

socket.on('disconnect', function(){
    console.log('Perdimos la conexion con el servidor');
});

//Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Angel',
    mensaje: 'Hola mundo'
}, function(res){
    console.log('Callback enviarMensaje', res);
});


//Escuchar informacion
socket.on('enviarMensaje', function(mensaje){
    console.log('Servidr:', mensaje);
});
