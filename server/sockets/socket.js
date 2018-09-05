let {io} = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado...');

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    client.on('enviarMensaje', (mensaje, callback) => {
        console.log(mensaje);

        //enviar broadcast
        client.broadcast.emit('enviarMensaje', data);

        if(mensaje.usuario){
            callback({status: 'ok'});
        }else{
            callback({status: 'nok'});
        }
    });

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a la app'
    });
});
