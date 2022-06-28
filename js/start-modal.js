
import { log } from './main.js';
import * as p from './playmat.js'; 

const startModal = document.getElementById('start-game')

let textBox = document.createElement('div')
textBox.innerHTML = `
<div class="side-by-side">
    <p id='starting-player-text'></p>
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
    let startingPlayerText = document.getElementById('starting-player-text');
    
    startModal.classList.remove('hidden')
    startModal.appendChild(textBox)
    let chooseArcher = document.getElementById('archer')
    let chooseThief = document.getElementById('thief')
    let chooseFighter = document.getElementById('fighter')
    chooseArcher.addEventListener('click', function() {
        log('hello from the console')
        p.playerArray.push(p.playerOne)

    })
    
}