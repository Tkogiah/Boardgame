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

class Player {
    constructor(playerName) {
        this.name = playerName,
        this.type = 'player',
        this.level = 1,
        this.money = 0,
        this.location = 0,
        this.attacks = 0,
        this.movement = 0,
        this.deck = {
            drawPile:[],
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
        this.speed = 2,
        this.range = 5,
        this.picture = '/assets/Archer.jpg', 
        this.damage = 3
    }
}
export class Fighter extends Player {
    constructor(name) {
        super(name)
        this.playerClass = Fighter;
        this.speed = 3,
        this.range = 2,
        this.picture = '/assets/Fighter.png', 
        this.damage = 5
    }  
}
export class Thief extends Player {
    constructor(name) {
        super(name)
        this.playerClass = Thief;
        this.speed = 5,
        this.range = 3,
        this.picture = '/assets/Thief.jpg', 
        this.damage = 2
    }  
}




export class Enemy {
    constructor() {
        this.type = 'enemy',
        this.location = 90,
        this.speed = 1

    }   
}
export class Goblin extends Enemy {
    constructor() {
        super()
        this.name = 'Goblin'
        this.health = 10
    }  
}
export class Orc extends Enemy {
    constructor() {
        this.name = 'Orc'
        this.health = 20
    }  
}
export class Ogre extends Enemy {
    constructor() {
        this.name = 'Ogre'
        this.health = 30
    }  
}
export class Giant extends Enemy {
    constructor() {
        this.name = 'Giant'
        this.health = 40
    }  
}
export class Demon extends Enemy {
    constructor() {
        this.name = 'Demon'
        this.health = 50
    }  
}
export class Behemoth extends Enemy {
    constructor() {
        this.name = ''
        this.health = 60
    }  
}
export class Leviathan extends Enemy {
    constructor() {
        this.name = ''
        this.health = 70
    }  
}
export class Demigog extends Enemy {
    constructor() {
        this.name = ''
        this.health = 80
    }  
}
export class Dragon extends Enemy {
    constructor() {
        this.name = ''
        this.health = 90
    }  
}
export class Tesserak extends Enemy {
    constructor() {
        this.name = ''
        this.health = 100
    }  
}
