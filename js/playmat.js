import { log } from "./main.js";

// export const showHand = document.getElementById('hand');
// const playmat = document.getElementById('playmat')
// const hand = [
    
// ]
// let display = false;
// showHand.addEventListener('click', function() {
//     if(!display) {
//         console.log('hello from the console.')
//         let modal = document.createElement('div')
//         modal.classList.add('modal')
//         hand.forEach(element => {   
//             let card = document.createElement('div')
//             card.classList.add('modal-card')
//             card.innerHTML = `
//                 <div>${element.name}</div>
//                 <div>${element.value}</div>
//             `;
//             modal.appendChild(card)

//         });
        
        
        
//         playmat.appendChild(modal)
        
        

//         display = !display 
//     }
//     else {
//         playmat.removeChild(playmat.lastChild)
//         display = !display
//     }
    
// })

// function createCard(array) {
//     array.forEach(element => {
        
//     })
// }

// const playerStats = document.getElementById('game-stats')
let numberOfPlayers = 0 
function setPlayerName(name) {
    let playerName = document.createElement('div')
    playerName.classList.add('stat-width')
    playerName.innerText = `Name: ${name}`
    return playerName
}

function setPlayerLocation(location = 0) {
    let playerLocation = document.createElement('div')
    playerLocation.classList.add('stat-width')
    playerLocation.innerText = `location: ${location}`
    return playerLocation
}

function setPlayerLevel(level = 1) {
    let playerLevel = document.createElement('div')
    playerLevel.classList.add('stat-width')
    playerLevel.innerText = `level: ${level}`
    return playerLevel
}
function setPlayerClass(characterClass) {
    let playerClass = document.createElement('div')
    playerClass.classList.add('stat-width')
    playerClass.innerText = `Class: ${characterClass}`
    return playerClass
}

export function createPlayerOne(name, type) {
    const playerStats = document.getElementById('game-stats')
    let playerOne = document.createElement('div')
    playerOne.id = 'player-one'
    playerOne.classList.add('player-stats')
    playerStats.appendChild(playerOne)
    
    let playerName = setPlayerName(name)
    playerOne.appendChild(playerName)

    let location = setPlayerLocation()
    playerOne.appendChild(location)

    let level = setPlayerLevel()
    playerOne.appendChild(level)

    let pClass = setPlayerClass(type)
    playerOne.appendChild(pClass)
}

export function createPlayerTwo(name, type) {
    const playerStats = document.getElementById('game-stats')
    let playerOne = document.createElement('div')
    playerOne.id = 'player-two'
    playerOne.classList.add('player-stats')
    playerStats.appendChild(playerOne)
    
    let playerName = setPlayerName(name)
    playerOne.appendChild(playerName)

    let location = setPlayerLocation()
    playerOne.appendChild(location)

    let level = setPlayerLevel()
    playerOne.appendChild(level)

    let pClass = setPlayerClass(type)
    playerOne.appendChild(pClass)
}

export function createPlayerThree(name, type) {
    const playerStats = document.getElementById('game-stats')
    let playerOne = document.createElement('div')
    playerOne.id = 'player-three'
    playerOne.classList.add('player-stats')
    playerStats.appendChild(playerOne)
    
    let playerName = setPlayerName(name)
    playerOne.appendChild(playerName)

    let location = setPlayerLocation()
    playerOne.appendChild(location)

    let level = setPlayerLevel()
    playerOne.appendChild(level)

    let pClass = setPlayerClass(type)
    playerOne.appendChild(pClass)
}

export function createPlayerFour(name, type) {
    const playerStats = document.getElementById('game-stats')
    let playerOne = document.createElement('div')
    playerOne.id = 'player-four'
    playerOne.classList.add('player-stats')
    playerStats.appendChild(playerOne)
    
    let playerName = setPlayerName(name)
    playerOne.appendChild(playerName)

    let location = setPlayerLocation()
    playerOne.appendChild(location)

    let level = setPlayerLevel()
    playerOne.appendChild(level)

    let pClass = setPlayerClass(type)
    playerOne.appendChild(pClass)
}

export function createPlayerFive(name, type) {
    const playerStats = document.getElementById('game-stats')
    let playerOne = document.createElement('div')
    playerOne.id = 'player-five'
    playerOne.classList.add('player-stats')
    playerStats.appendChild(playerOne)
    
    let playerName = setPlayerName(name)
    playerOne.appendChild(playerName)

    let location = setPlayerLocation()
    playerOne.appendChild(location)

    let level = setPlayerLevel()
    playerOne.appendChild(level)

    let pClass = setPlayerClass(type)
    playerOne.appendChild(pClass)
}
