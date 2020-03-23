import * as Deck from '../cards/Deck'

export function initialize(theApp) {
    theApp.socket.on('startGame', (startGame) => {
        console.log(startGame.role);
        theApp.setState( {game_phase: 1, myself_role: startGame.role} );
    })

    theApp.socket.on('noPlayers', () => {
        alert("Numero di giocatori connessi non adatto.");
    })
}

export function startGame(theApp) {
    theApp.socket.emit('startGame', {deck: Deck.newDeck()} );
}

