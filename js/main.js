import * as b from './board.js'
import * as c from './characters.js'
import * as mr from './movement-range.js'
import * as p from './playmat.js';
import * as q from './querySelectors.js'
import * as gameStart from './start-modal.js'

export function log(a) {
    console.log(a)
}

window.onload = gameStart.setInMotion
// p.displayActivePlayer(0)
// p.displayActiveEnemies(p.enemyArray)
