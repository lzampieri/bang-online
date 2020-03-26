import * as gameManager from '../gameManager/gameManager'

export default function initializeSocket(theApp) {

    theApp.socket.on('login', (login) => {
        theApp.setState( {
            login_state: login.text
        })
    });

    theApp.socket.on('login_disallowed', () => {
        alert("La partita è già iniziata. Impossibile collegarsi.");
        theApp.setState( { game_phase: -1 });
    } );

    theApp.socket.on('reset', (reset) => {
        theApp.setState( {
            game_phase: 0,
            last_reset: reset.last_reset,
            logged: reset.logged
        } );
    });

    gameManager.initialize(theApp);
}