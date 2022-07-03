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
    // if(playerArray[0]) {
    //     log(playerArray[0])
    // }
    displayActivePlayer(0)
    displayActiveEnemies(enemyArray)
    
    
})

//THESE CHARACTERS ALREADY HAVE NAMES
export let playerArcher = new c.Archer('Julia')
export let playerFighter = new c.Fighter('Marcus')
export let PlayerThief = new c.Thief('Leo')

export let enemyOne = new c.Goblin()
export let enemyTwo = new c.Goblin()
export let enemyThree = new c.Goblin()
export let enemyFour = new c.Goblin()
export let enemyFive = new c.Goblin()
export let enemySix = new c.Goblin()
export let enemySeven = new c.Goblin()
export let enemyEight = new c.Goblin()
export let enemyNine = new c.Goblin()
export let enemyTen = new c.Goblin()





//after starting modal was added
export let playerArray = []
export let enemyArray = [enemyOne, enemyTwo, enemyThree, enemyFour, enemyFive, enemySix, enemySeven, enemyEight, enemyNine, enemyTen]


export function displayActivePlayer(index) {
    
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
        if(element.location < 1) { 
            element.location = 0
            playersLose()
            
        }
        if(element.location >= 1) {
                  
            document.getElementById(element.location).classList.add('enemy')
            document.getElementById(element.location).classList.add(`${element.health}`)
            document.getElementById(element.location).addEventListener('click', (e) => {
            
            })
            displayEnemies()  
        }
        
        
    });
    
}
function playersLose() {
    activeScreen.innerHTML = ''
    endTurn.classList.add('hidden')
    let modal = document.createElement('div')
    modal.classList.add('players-lose')
    modal.innerText = 'The hoards have prevailed against your prowess. The Kingdom is lost!'
    let restart = document.createElement('div')
    restart.classList.add('restart')
    restart.innerText = 'RESTART'
    restart.addEventListener('click', function() {
        window.location.reload(true)
    })
    modal.appendChild(restart)
    activeScreen.appendChild(modal)

}

//middle playmat display screen

const activeScreen = $('game-stats')
const activePlayers = $('players')
const activeEnemies = $('enemies')




activePlayers.addEventListener('click', function() {
    displayPlayers()
})

function displayPlayers() {
    activeScreen.innerHTML = ''
    playerArray.forEach(element => {
        let player = document.createElement('div')
        let playerName = document.createElement('div')
        let playerLocation = document.createElement('div')
        let playerDamage = document.createElement('div')
        let playerSpeed = document.createElement('div')
        let playerRange = document.createElement('div')
        player.classList.add('player-stats')
        playerName.classList.add('player-stat-width')
        playerLocation.classList.add('player-stat-width')
        playerDamage.classList.add('player-stat-width')
        playerSpeed.classList.add('player-stat-width')
        playerRange.classList.add('player-stat-width')
        playerName.innerText = `Name: ${element.name}`;
        playerLocation.innerText = `Location: ${element.location}`;
        playerDamage.innerText = `Damage: ${element.damage}`
        playerSpeed.innerText = `Speed: ${element.speed}`
        playerRange.innerText = `Range: ${element.range}`
        player.appendChild(playerName)
        player.appendChild(playerLocation)
        player.appendChild(playerDamage)
        player.appendChild(playerSpeed)
        player.appendChild(playerRange)
        activeScreen.appendChild(player)
        
    })
}

activeEnemies.addEventListener('click', function() {
    displayEnemies()
})

function displayEnemies() {
    activeScreen.innerHTML = ''
    enemyArray.forEach(element => {
        let enemy = document.createElement('div')
        let enemyName = document.createElement('div')
        let enemyLocation = document.createElement('div')
        let enemyHealth = document.createElement('div')
        enemy.classList.add('enemy-stats')
        enemyName.classList.add('enemy-stat-width')
        enemyLocation.classList.add('enemy-stat-width')
        enemyHealth.classList.add('enemy-stat-width')
        enemyName.innerText = `Name: ${element.name}`
        enemyLocation.innerText = `Location: ${element.location}`
        enemyHealth.innerText = `Health: ${element.health}`
        enemy.appendChild(enemyName)
        enemy.appendChild(enemyLocation)
        enemy.appendChild(enemyHealth)
        activeScreen.appendChild(enemy)
     })
}



export function takeDamage(hex) {
    activeScreen.innerHTML = ''
    let modal = document.createElement('div')
    modal.classList.add('take-damage')
    modal.innerText = 'There are multiple enemies here. Which one?'
    activeScreen.appendChild(modal)
    let count = 0
    enemyArray.forEach(e => {
        if(e.location == hex) { count+=1 }   
    })
    if(count > 1) {
        enemyArray.forEach(e => {
            if(e.location == hex) {
                let modalOption = document.createElement('div')
                modalOption.classList.add('modal-option')
                modalOption.innerText = `this one? ${e.name} - ${e.health} health`
                modal.appendChild(modalOption)
                modalOption.addEventListener('click', function() {
                    e.health = e.health - playerArray[0].damage
                    if(e.health <= 0) {
                        enemyArray.splice(enemyArray.indexOf(e), 1)
                    }
                    activeScreen.removeChild(modal)
                    displayEnemies()
                })
            }   
        })     
    }
    else {
        enemyArray.forEach(e => {
            log(e)
            if(e.location == hex) {
                e.health = e.health - playerArray[0].damage
                if(e.health <= 0) {
                    let hexRemoval = document.getElementById(e.location)
                    hexRemoval.classList.remove('enemy')
                    enemyArray.splice(enemyArray.indexOf(e), 1) 
                }
                activeScreen.removeChild(modal) 
            }
        })
    displayEnemies()    
    }
}










//take in hex number
//traverse thru enemyarray and push all index.location that == hex into new array
//if new array.length > 1
    //return function that displays an option modal
        //receives a number that correlates to an index of new array based on EL on option modal
//reduce player.damage from 











































































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