import * as Deck from '../cards/Deck'

export function initialize(theApp) {
    theApp.socket.on('gameStarted', () => {
        theApp.setState( {game_phase: 1} );
    })
}

export function startGame(theApp) {
    theApp.socket.emit('newDeck', {deck: Deck.newDeck()} );
}

