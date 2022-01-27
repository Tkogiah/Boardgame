import { log } from './main.js';
import { highlightRangeArray } from './movement-range.js';
import * as p from './playmat.js'




export const boardSpaces = [];

const board = document.querySelectorAll('.hex');

board.forEach( e => {
    e.addEventListener('click', function() {
        if(e.classList.contains('red')) {
            p.playerArray[0].money +=1
            p.displayActivePlayer(0)
        }
        else {log('not red')}
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


function getIncome(location) {
    if( location >= 1 && location <= 6) {
         return 1
    }else if(location >= 7 && location <= 18) {
        return 2
    }else if(location >= 19 && location <= 36) {
        return 3
    }else if(location >= 37 && location <= 60) {
        return 4
    }else if(location >= 61 && location <= 90) {
        return 5
    }else {
        return 0
    }
}

