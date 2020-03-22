import * as Cards from './Cards'

export class BrownCards {
    static type = Cards.Card.cardsTypes.brown
}

export class Bang extends BrownCards {
    static id = 101;
    static card_name = 'Bang'
}

export class Mancato extends BrownCards {
    static id = 102;
    static card_name = 'Mancato'
}

export class Birra extends BrownCards {
    static id = 103;
    static card_name = 'Birra'
}