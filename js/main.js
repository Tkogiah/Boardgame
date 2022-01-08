import * as board from './board.js';
import * as characters from './characters.js'
import * as mr from './movement-range.js'
import { showHand } from './playmat.js';
import * as q from './querySelectors.js'
export function log(a) {
    console.log(a)
}



q.name('name', 'Marcus')
q.damage('damage', '5')
q.range('range', '3')
q.speed('speed', '2')
q.money('money', '5')
q.photo('photo', '/assets/scary-man.jpg')
q.level('level', '1')
q.draw('draw', '21')
q.discard('discard', '4')
mr.fillHighlightRangeArray(2,5)
//mr.fillHighlightMovementArray(6, 1, 5)
// mr.attack(location, health, damage)
log(mr.highlightRangeArray)
characters.createEnemy(33)
log(characters.characterArray)
q.enemyTakesDamage(33, 5)