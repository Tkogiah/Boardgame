import * as board from './board.js';
import * as characters from './characters.js'
import * as mr from './movement-range.js'
import { showHand } from './playmat.js';
import * as q from './querySelectors.js'
import * as gameStart from './start-modal.js'
export function log(a) {
    console.log(a)
}

let playerOne = {
    name:'Marcus',
    level: 1,
    speed: 3,
    range: 5, 
    damage: 2,
    money: 0,
    picture: '/assets/scary-man.jpg',
    position: 0,
    deck: {
        drawPile:['card one','card one','card one','card one','card one'],
        handPile:['card two', 'card-two', 'card-two','card-two','card-two'],
        discardPile: ['card-three']
    },
    remainingAttacks: 0,
    remainingMovements: 0,
    remainingDraws: 0,

}

q.name('name', playerOne.name)
q.level('level', playerOne.level)
q.speed('speed', playerOne.speed)
q.damage('damage', playerOne.damage)
q.range('range', playerOne.range)
q.money('money', playerOne.money)
q.photo('photo', playerOne.picture)

q.draw('draw', playerOne.deck.drawPile.length)

q.discard('discard', playerOne.deck.discardPile.length)
mr.fillHighlightRangeArray(playerOne.range, playerOne.position)
mr.fillHighlightMovementArray(playerOne.speed, playerOne.remainingMovements, playerOne.position)
// mr.attack(location, health, damage)
log(mr.highlightRangeArray)
characters.createEnemy(33)
log(characters.characterArray)
//q.enemyTakesDamage(33, 5)

