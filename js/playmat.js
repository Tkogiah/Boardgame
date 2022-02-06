import { log } from "./main.js";
import * as q from './querySelectors.js'
import * as c from './characters.js'
import * as mr from './movement-range.js'
import * as b from './board.js'

function $(id) {
    if(typeof id === 'string' || id instanceof String) {
        return document.getElementById(id)
    }
    else {
        return id[0]
    }
}

let endTurn = $('end')
let turn = 0;
endTurn.addEventListener('click', function() {
    playerArray[0].attacks = 0
    playerArray[0].movement = 0
    playerArray[0].money = 0
    playerArray.push(playerArray[0])
    playerArray.shift()
    if(playerArray[0]) {
        log(playerArray[0])
    }
    displayActivePlayer(0)
    displayActiveEnemies(enemyArray)
})



let playerOne = new c.Archer('Julia')
let playerTwo = new c.Fighter('Marcus')
let PlayerThree = new c.Thief('Leo')

let enemyOne = new c.Goblin()
let enemyTwo = new c.Goblin()
let enemyThree = new c.Goblin()
let enemyFour = new c.Goblin()
let enemyFive = new c.Goblin()
let enemySix = new c.Goblin()
let enemySeven = new c.Goblin()
let enemyEight = new c.Goblin()
let enemyNine = new c.Goblin()
let enemyTen = new c.Goblin()

export let playerArray = [PlayerThree, playerOne, playerTwo]
export let enemyArray = [enemyOne, enemyTwo, enemyThree, enemyFour, enemyFive, enemySix, enemySeven, enemyEight, enemyNine, enemyTen]

export function displayActivePlayer(index) {
    log(playerArray[index])
    // if(playerArray[index] === undefined) { 
    //     index = 0;
    //     displayActiveEnemies(enemyArray)
    // }
    q.name('name', playerArray[index])
    q.damage('damage', playerArray[index])
    q.range('range', playerArray[index])
    q.speed('speed', playerArray[index])
    q.money('money', playerArray[index])
    q.photo('photo', playerArray[index])
    q.level('level', playerArray[index])
    q.draw('draw', playerArray[index].deck.drawPile)
    q.discard('discard', playerArray[index].deck.discardPile)
    mr.clearHighlightedHexes()
    
    mr.fillHighlightRangeArray(playerArray[index].range, playerArray[index].attacks, playerArray[index].location)
    mr.fillHighlightMovementArray(playerArray[index].speed, playerArray[index].movement, playerArray[index].location)

}



export function displayActiveEnemies(enemiesArray) {
    b.removeEnemyColor()
    enemiesArray.forEach(element => {
        let enemyMovement = Math.floor(Math.random() * 10) + 1
        element.location -= enemyMovement
        
        document.getElementById(element.location).classList.add('enemy')
        document.getElementById(element.location).classList.add(`${element.health}`)
        document.getElementById(element.location).addEventListener('click', (e) => {
            log(`you did damage`)
        })
        
    });

}















































































//OLD CODE
// //PLAYMAT MIDDLE FUNCTIONS TO CREATE AND UPDATE NODES FOR PLAYERS AND ENEMIES
// let numberOfPlayers = 0 
// function setPlayerName(name) {
//     let playerName = document.createElement('div')
//     playerName.classList.add('stat-width')
//     playerName.innerText = `Name: ${name}`
//     return playerName
// }

// function setPlayerLocation(location = 0) {
//     let playerLocation = document.createElement('div')
//     playerLocation.classList.add('stat-width')
//     playerLocation.innerText = `Location: ${location}`
//     return playerLocation
// }

// function setPlayerLevel(level = 1) {
//     let playerLevel = document.createElement('div')
//     playerLevel.classList.add('stat-width')
//     playerLevel.innerText = `Level: ${level}`
//     return playerLevel
// }
// function setPlayerClass(characterClass) {
//     let playerClass = document.createElement('div')
//     playerClass.classList.add('stat-width')
//     playerClass.innerText = `Class: ${characterClass}`
//     return playerClass
// }

// export function createPlayerOne(name, type) {
//     const playerStats = document.getElementById('game-stats')
//     let playerOne = document.createElement('div')
//     playerOne.id = 'player-one'
//     playerOne.classList.add('player-stats')
//     playerStats.appendChild(playerOne)
    
//     let playerName = setPlayerName(name)
//     playerOne.appendChild(playerName)

//     let location = setPlayerLocation()
//     playerOne.appendChild(location)

//     let level = setPlayerLevel()
//     playerOne.appendChild(level)

//     let pClass = setPlayerClass(type)
//     playerOne.appendChild(pClass)
// }

// export function createPlayerTwo(name, location, level, type) {
//     let playerTwo = document.createElement('div')
//     playerTwo.id = 'player-two'
//     playerTwo.classList.add('player-stats')
//     document.getElementById('player-one').parentNode.insertBefore(playerTwo, document.getElementById('player-one').nextSibling);
    
//     let pName = setPlayerName(name)
//     playerTwo.appendChild(pName)

//     let pLocation = setPlayerLocation(location)
//     playerTwo.appendChild(pLocation)

//     let pLevel = setPlayerLevel(level)
//     playerTwo.appendChild(pLevel)

//     let pClass = setPlayerClass(type)
//     playerTwo.appendChild(pClass)
// }

// export function createPlayerThree(name, location, level, type) {
//     let playerThree = document.createElement('div')
//     playerThree.id = 'player-three'
//     playerThree.classList.add('player-stats')
//     document.getElementById('player-two').parentNode.insertBefore(playerThree, document.getElementById('player-two').nextSibling);
    
//     let pName = setPlayerName(name)
//     playerThree.appendChild(pName)

//     let pLocation = setPlayerLocation(location)
//     playerThree.appendChild(pLocation)

//     let pLevel = setPlayerLevel(level)
//     playerThree.appendChild(pLevel)

//     let pClass = setPlayerClass(type)
//     playerThree.appendChild(pClass)
// }

// export function createPlayerFour(name, type) {
//     const playerStats = document.getElementById('game-stats')
//     let playerOne = document.createElement('div')
//     playerOne.id = 'player-four'
//     playerOne.classList.add('player-stats')
//     playerStats.appendChild(playerOne)
    
//     let playerName = setPlayerName(name)
//     playerOne.appendChild(playerName)

//     let location = setPlayerLocation()
//     playerOne.appendChild(location)

//     let level = setPlayerLevel()
//     playerOne.appendChild(level)

//     let pClass = setPlayerClass(type)
//     playerOne.appendChild(pClass)
// }

// export function createPlayerFive(name, type) {
//     const playerStats = document.getElementById('game-stats')
//     let playerOne = document.createElement('div')
//     playerOne.id = 'player-five'
//     playerOne.classList.add('player-stats')
//     playerStats.appendChild(playerOne)
    
//     let playerName = setPlayerName(name)
//     playerOne.appendChild(playerName)

//     let location = setPlayerLocation()
//     playerOne.appendChild(location)

//     let level = setPlayerLevel()
//     playerOne.appendChild(level)

//     let pClass = setPlayerClass(type)
//     playerOne.appendChild(pClass)
// }



// function setEnemyName(name='goblin') {
//     let enemyName = document.createElement('div')
//     enemyName.classList.add('stat-width')
//     enemyName.innerText = `Name: ${name}`
//     return enemyLocation
// }
// function setEnemyLocation(location=90) {
//     let enemyLocation = document.createElement('div')
//     enemyLocation.classList.add('stat-width')
//     enemyLocation.innerText = `Location: ${location}`
//     return enemyLocation
// }
// function setEnemyLevel(level=1) {
//     let enemyLevel = document.createElement('div')
//     enemyHealth.classList.add('stat-width')
//     enemyLevel.innerText = `Level: ${level}`
//     return enemyLevel
// }
// function setEnemyHealth(health=10) {
//     let enemyHealth = document.createElement('div')
//     enemyHealth.classList.add('stat-width')
//     enemyHealth.innerText = `Health: ${health}`
//     return enemyHealth
// }

// export function createEnemyOne(name, location, level, health) {
//     const enemyStats = document.getElementById('game-stats')
//     let enemyOne = document.createElement('div')
//     enemyOne.id = 'enemy-one'
//     enemyOne.classList.add('enemy-stats')
//     enemyStats.appendChild(enemyOne)
    
//     let enemyName = setEnemyName(name)
//     enemyOne.appendChild(enemyName)

//     let eLocation = setEnemyLocation(location)
//     enemyOne.appendChild(eLocation)

//     let eLevel = setEnemyLevel(level)
//     enemyOne.appendChild(eLevel)

//     let eHealth = setEnemyHealth(health)
//     enemyOne.appendChild(eClass)
    
// }