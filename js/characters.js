import { log } from "./main.js"


export function $(id) {
    if(typeof id === 'string' || id instanceof String) {
        return document.getElementById(id)
    }
    else {
        return id[0]
    }
}
export function name(id, name) {
    $(id).innerText = `Name: ${name}` 
}

const primaryAttribute = 5
const secondaryAttribute = 3
const tritiaryAttribute = 2

export function damage(id, damage) {
    $(id).innerText = `Damage: ${damage}` 
}
export function range(id, range) {
    $(id).innerText = `Range: ${range}` 
}
export function speed(id, speed) {
    $(id).innerText = `Speed: ${speed}` 
}
export function money(id, money) {
    $(id).innerText = `Money: $${money}` 
}
export function photo(id, url) {
    $(id).style.backgroundImage = `url(${url})`
}
export function draw(id, arrayLength) {
    $(id).innerText = `Draw: (${arrayLength})`
}
export function discard(id, arrayLength) {
    $(id).innerText = `Discard: (${arrayLength})`
}
export function enemyTakesDamage(location, damage) {
     
}


export const characterArray = []

export function createPlayer(name, level, speed, range, damage) {
    
    let player = {
        name: name,
        level: level,
        speed: 3,
        range: 4, 
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

    characterArray.push(player)
    log(characterArray)
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

