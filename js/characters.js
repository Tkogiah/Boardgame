import { log } from "./main.js"

export const characterArray = []

export function createPlayer(playerName) {
    constructor(playerName)
    let player = {
        name: playerName,
        img: 'img',
        attack: 1,
        range: 1,
        speed: 1,
        actions: 0,
        location: 0,
        draws: 0,
        deck: {
            draw: [],
            hand: [],
            discard: []
        },
        head: '',
        gloves: '',
        weapon: '',
        shoes: '',
        belt: '',
        mount: ''
    }
    characterArray.push(player)
}

//log(createPlayer('Marcus')) => 'Marcus' needs to be in 'quotes' to make it a string.

export function createEnemy(location) {
    let enemy = {
        name: 'bad guy',
        img: 'img',
        speed: 1,
        health: 10,
        location: location,
        color: 'purple',
        deck: {
            draw: [],
            hand: [],
            discard: []
        },
    }
    characterArray.push(enemy)
    document.getElementById(location).classList.add('enemy')
    document.getElementById(location).addEventListener('click', (e) => {
        log(`you did damage`)
    })
}

