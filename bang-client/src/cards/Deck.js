import * as brownCards from "./BrownCards"

export function newDeck() {
    var mazzo = [
        brownCards.Bang, brownCards.Bang, brownCards.Bang, brownCards.Bang, brownCards.Bang,
        brownCards.Mancato, brownCards.Mancato, brownCards.Mancato,
        brownCards.Birra
    ];
    return mazzo.map( (carta) => {return carta.id} );
}