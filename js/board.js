import { log } from './main.js';
import * as mr from './movement-range.js'
import * as p from './playmat.js'

const board = document.querySelectorAll('.hex');

//EVENTLISTENER TO MAKE MONEY && damage enemy
board.forEach( e => {
    e.addEventListener('click', function() {
        if(e.classList.contains('red') && e.classList.contains('enemy') && p.playerArray[0].attacks > 0) {
            if(p.playerArray[0].location >= 1 && p.playerArray[0].location <= 6) {
                p.playerArray[0].money +=1
            }
            else if(p.playerArray[0].location >= 7 && p.playerArray[0].location <= 18) {
                p.playerArray[0].money +=2
            }
            else if(p.playerArray[0].location >= 19 && p.playerArray[0].location <= 36) {
                p.playerArray[0].money +=3
            }
            else if(p.playerArray[0].location >= 37 && p.playerArray[0].location <= 60) {
                p.playerArray[0].money +=4
            }
            else if(p.playerArray[0].location >= 61 && p.playerArray[0].location <= 90) {
                p.playerArray[0].money +=5
            }
            else {
                p.playerArray[0].money += 0
            }
           
            p.takeDamage(e.id)
            p.playerArray[0].attacks -= 1
            mr.clearHighlightedHexes()
            p.displayActivePlayer(0)
        }
    })
})

board.forEach((element) => {
    if(element.id >= 1 && element.id <= 6) {
        element.classList.add('row-one')
    }
    else if(element.id >= 7 && element.id <= 18) {
        element.classList.add('row-two')
    }
    else if(element.id >= 19 && element.id <= 36) {
        element.classList.add('row-three')
    }
    else if(element.id >= 37 && element.id <= 60) {
        element.classList.add('row-four')
    }
    else if(element.id >= 61 && element.id <= 90) {
        element.classList.add('row-five')
    }
    else {
        element.classList.add('row-zero')
    }
})

board.forEach(e => {
    e.addEventListener('click', function() {
        if(e.classList.contains('yellow') && !e.classList.contains('enemy') && p.playerArray[0].movement > 0) {
            p.playerArray[0].movement -= Math.abs(p.playerArray[0].location - e.id)
            p.playerArray[0].location = e.id
            let yoyo = document.querySelectorAll('.hex')
            yoyo.forEach(e => {
                e.classList.remove('yellow')
              })
            p.displayActivePlayer(0)
        }

    })
})

export function removeEnemyColor() {
    board.forEach(e => {
        e.classList.remove('enemy')
    })
}
