















class Card {
    constructor(title) {
        this.title = title
    }
}

class Action extends Card {
    constructor(name) {}
    super(title) {}
    attack() {
        p.playerArray[0].attacks += 1
        p.displayActivePlayer(0)
           
    }
    move() {
        p.playerArray[0].movement += p.playerArray[0].speed * 1
        p.displayActivePlayer(0)    
    }
}


// class Orb extends Card {
//     trade: function(),
//     case1: 'stores money outside of discard pile',
//     case3: 'stat increase',
//     case4: 'copy other orb', 
// }
// class Mount extends Card {
//     attack: int,
//     range: int,
//     case1: linearMovement(),
//     case2: hexagonalMovement()
// }
// class Merchant extends Card {
//     case1: description = '', cost = int, deck = newCards[]
//     case2: 
//     .
//     .
//     .
//     case30: description = ''     
// }
// class Money extends Card {
//     remove: function()
// }
// class Action extends Card {
//     case1: attack,
//     case2: move
// }









class Merchant extends Card {}









