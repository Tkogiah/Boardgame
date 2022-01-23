import * as board from './board.js';
import * as c from './characters.js'
import * as mr from './movement-range.js'
import { showHand } from './playmat.js';
import * as q from './querySelectors.js'
import * as gameStart from './start-modal.js'
export function log(a) {
    console.log(a)
}



c.createPlayer('Marcus', 1, 3, 2, 5, '/assets/scary-man.jpg')
c.createPlayer('Jared', 1, 3, 2, 5, '/assets/scary-man.jpg')
console.log(c.characterArray)
let CA = c.characterArray


q.name('name', CA[0].name)
q.level('level', CA[0].level)
q.speed('speed', CA[0].speed)
q.damage('damage', CA[0].damage)
q.range('range', CA[0].range)
q.money('money', CA[0].money)
q.photo('photo', CA[0].picture)

q.draw('draw', CA[0].deck.drawPile.length)

q.discard('discard', CA[0].deck.discardPile.length)
mr.fillHighlightRangeArray(CA[0].range, CA[0].position)
mr.fillHighlightMovementArray(CA[0].speed, CA[0].remainingMovements, CA[0].position)
// mr.attack(location, health, damage)
//log(mr.highlightRangeArray)
c.createEnemy(33)
//log(characters.characterArray)
//q.enemyTakesDamage(33, 5)

