
import { log } from './main.js';
import * as p from './playmat.js'; 

const startModal = document.getElementById('start-game')

let textBox = document.createElement('div')
textBox.innerHTML = `
<div id='side-by-side' class="side-by-side">
    
    <div class='space' for="numplayers">
        <div id='archer' class='choose-your-character archer'>
            <p>ARCHER</p>
            <p>range:5</p>
            <p>damage:3</p>
            <p>speed:2</p>
        </div>
        
        <div id='thief' class='choose-your-character thief'>
            <p>THIEF</p>
            <p>range:3</p>
            <p>damage:2</p>
            <p>speed:5</p>
        </div>

        <div id='fighter' class='choose-your-character fighter'>
            <p>FIGHTER</p>
            <p>range:2</p>
            <p>damage:5</p>
            <p>speed:3</p>
        </div>
    </div>
</div>
`

//textBox.classList.add('text-box')



export function setInMotion() {
    startModal.classList.remove('hidden')
    document.getElementById('hexboard').classList.add('hidden')
    document.getElementById('playmat').classList.add('hidden')
    startModal.appendChild(textBox)
    
    let sideBySide = document.getElementById('side-by-side');
    let startingPlayerText = document.createElement('p');
    let playerBeginningCount = 1
    startingPlayerText.innerText = `Player ${playerBeginningCount} choose your character`
    sideBySide.insertBefore(startingPlayerText, sideBySide.firstChild)
    
    let chooseArcher = document.getElementById('archer')
    let chooseThief = document.getElementById('thief')
    let chooseFighter = document.getElementById('fighter')

    let startGameButton = document.createElement('div')
    startGameButton.classList.add('start-game-button')
    startGameButton.innerText = 'Ready?'
    sideBySide.appendChild(startGameButton)

    chooseArcher.addEventListener('click', function() {
        p.playerArray.push(p.playerArcher)
        document.getElementById('archer').classList.add('hidden')
        if(playerBeginningCount < 3) {
            playerBeginningCount += 1
        }
        else {
            startingPlayerText.classList.add('hidden')
        }
        startingPlayerText.innerHTML = `Player ${playerBeginningCount} choose your character`
    })

    chooseThief.addEventListener('click', function() {
        p.playerArray.push(p.PlayerThief)
        document.getElementById('thief').classList.add('hidden')
        if(playerBeginningCount < 3) {
            playerBeginningCount += 1
        }
        else {
            startingPlayerText.classList.add('hidden')
        }
        startingPlayerText.innerHTML = `Player ${playerBeginningCount} choose your character`
    })
    
    chooseFighter.addEventListener('click', function() {
        p.playerArray.push(p.playerFighter)
        document.getElementById('fighter').classList.add('hidden')
        if(playerBeginningCount < 3) {
            playerBeginningCount += 1
        }
        else {
            startingPlayerText.classList.add('hidden')
        }
        startingPlayerText.innerHTML = `Player ${playerBeginningCount} choose your character`
    })

    startGameButton.addEventListener('click', function() {
        startModal.classList.add('hidden')
        document.getElementById('hexboard').classList.remove('hidden')
        document.getElementById('playmat').classList.remove('hidden')
        p.displayActivePlayer(0)
        //p.displayActiveEnemies(enemyArray)
        
    })
}