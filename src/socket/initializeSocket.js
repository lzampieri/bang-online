import * as gameManager from '../gameManager/gameManager'

export default function initializeSocket(theApp) {

    theApp.socket.on('login', (login) => {
        theApp.setState( {
            game_phase: 0,
            login_state: login.text
        })
    });

    theApp.socket.on('login_disallowed', () => {
        theApp.setState( { game_phase: -2 });
    } );

    theApp.socket.on('reset', (reset) => {
        theApp.setState( {
            game_phase: 0,
            last_reset: reset.last_reset,
            players: reset.players
        } );
    });

    gameManager.initialize(theApp);
}