import { log } from './main.js';


export const boardSpaces = [];

export const board = document.querySelectorAll('.hex');



board.forEach((element) => {
    element.addEventListener('click', (e) => {
        log(`hello from the ${element.id} div`)
    })
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


for(let i = 0; i <= 90; i++) {
    let hexagon = {
        name: `space${i}`,
        players: [],
        enemies: [],
    }
    if(i >= 1 && i <= 6) {
        hexagon.money = 1
    }
    else if(i >= 7 && i <= 18) {
        hexagon.money = 2
    }
    else if(i >= 19 && i <= 36) {
        hexagon.money = 3
    }
    else if(i >= 37 && i <= 60) {
        hexagon.money = 4
    }
    else if(i >= 61 && i <= 90) {
        hexagon.money = 5
    }
    else {
        hexagon.money = 0
    }

    boardSpaces.push(hexagon)
}