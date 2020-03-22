import * as gameManager from '../gameManager/gameManager'

export default function initializeSocket(theApp) {

    theApp.socket.on('login', (login) => {
        var username = prompt( login.text );
        theApp.socket.emit('login', {username: username} );
    });

    theApp.socket.on('rebuild', (rebuild) => {
        theApp.setState( {
            last_reset: rebuild.last_reset,
            logged: rebuild.logged
        } );
    });

    gameManager.initialize(theApp);
}