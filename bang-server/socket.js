const utils = require('./utils');
const gameManager = require('./gameManager/gameManager');

var logged = []
var last_reset = 0

// Carichiamo Socket.io
let io = null;

function initSocket(server) {
    io = require('socket.io').listen(server);
    // Gestione della connessione
    io.sockets.on('connection', function (socket) {
        askForIdentification(socket)
    });
}

function askForIdentification(socket) {
    socket.emit('login', {text: "Inserisci username"} );

    socket.on('login', (login) => {
        if(login.username == null || login.username.length < 3 ) socket.emit('login', {text: 'Username non valido.'});
        else if(logged.includes(login.username)) socket.emit('login', {text: 'Username già esistente.'});
        else newPlayer(socket, login.username);
    });
}

function newPlayer(socket, username) {
    
    socket.username = username;
    if( logged.length == 0 ) last_reset = new Date();
    logged.push( socket );
    console.log( username + " logged in" );
    userUpdate();

    socket.on('disconnect', () => {
        logged = logged.filter( (sock) => { return sock != socket; } );
        console.log( socket.username + " logged out" );
        userUpdate();
    });

    gameManager.init(socket);
}

function userUpdate() {
    io.sockets.emit('rebuild', {
        logged: logged.map( (socket) => { return {username: socket.username}; }), 
        last_reset: utils.hourToString( last_reset )
    });
}




module.exports = initSocket





