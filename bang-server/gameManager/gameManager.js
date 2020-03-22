const utils = require('../utils')

function init(socket) {
    socket.on('newDeck', (newDeck) => {
        deck = utils.shuffle(newDeck.deck);
        console.log(deck);
        socket.broadcast.emit('gameStarted');
    })
}

module.exports = {init: init};