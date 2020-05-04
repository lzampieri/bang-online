export function initialize(theApp) {
    theApp.socket.on('startGame', (startGame) => {
        console.log(startGame.role);
        console.log(startGame.cards);
        theApp.setState( {
            game_phase: 1,
            myself_role: startGame.role,
            myself_cards: startGame.cards,
            myself_lifepoints: startGame.lifepoints
        } );
    })

    theApp.socket.on('noPlayers', () => {
        alert("Numero di giocatori connessi non adatto.");
    })
}

export function startGame(theApp) {
    theApp.socket.emit('startGame');
}

