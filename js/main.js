import * as board from './board.js';
import { showHand } from './playmat.js';
export function log(a) {
    console.log(a)
}

log(board.boardSpaces)
log(board)

const canvas = document.getElementById('canvas');































// const hexMatrix = [
//     [0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0],
//     [0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0],
//     [0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0],
//     [0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0],
//     [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
//     [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
//     [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
//     [0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0],
//     [0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0],
//     [0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0],
//     [0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0]
// ]
// const hexMatrixValues = [
//     [0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0],
//     [0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0],
//     [0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0],
//     [0,0,1,0,1,0,1,0,16,0,17,0,18,0,19,0,1,0,1,0,0],
//     [0,1,0,1,0,1,0,15,0,05,00,06,00,07,0,20,0,1,0,1,0],
//     [1,0,1,0,1,0,14,0,04,00,'z',01,00,08,0,21,0,1,0,1],
//     [0,1,0,1,0,1,0,13,0,03,00,02,00,09,0,1,0,1,0,1,0],
//     [0,0,1,0,1,0,1,0,12,00,11,00,10,0,1,0,1,0,1,0,0],
//     [0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0],
//     [0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0],
//     [0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0]
// ]

//in the hex model grid to go left or right it costs 2 spaces to go up or down to the next matrix costs one space