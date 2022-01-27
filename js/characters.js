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

class Player {
    constructor(playerName) {
        this.name = playerName,
        this.level = 1,
        this.money = 0,
        this.location = 0,
        this.deck = {
            drawPile:['card one','card one','card one','card one','card one'],
            handPile:['card two', 'card-two', 'card-two','card-two','card-two'],
            discardPile: ['card-three']
        },
        this.remainingAttacks = 0,
        this.remainingMovements = 0,
        this.remainingDraws = 0
    }
    
    
}
export class Archer extends Player {
    constructor(name) {
        super(name)
        this.playerClass = Archer;
        this.speed = 3,
        this.range = 5,
        this.picture = '/assets/Archer.png', 
        this.damage = 2
    }
}
export class Fighter extends Player {
    constructor(name) {
        super(name)
        this.playerClass = Fighter;
        this.speed = 3,
        this.range = 2,
        this.picture = '/assets/Fighter.jpg', 
        this.damage = 5
    }
}




//BE MINDFUL OF STRINGS
export class Enemy {
    constructor(enemy) {
        this.name = enemy,
        this.health = 10,
        this.location = 90,
        
        this.remainingAttacks = 0,
        this.remainingMovements = 0,
        this.remainingDraws = 0
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    
    
}
export function createEnemy(location) {
    let enemy = {
        name: 'enemy',
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

