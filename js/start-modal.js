
import { log } from './main.js'

const startModal = document.getElementById('start-game')

let textBox = document.createElement('div')
textBox.innerHTML = `
<div class="side-by-side">
    <label class='space' for="numplayers" style='padding-right: 10px;'>How many players do you have?</label>
    <input id='numplayers'>
    <input id='go-button' type="submit" value='Go!'>
</div>
`

//textBox.classList.add('text-box')



export function setInMotion() {
    startModal.classList.remove('hidden')
    startModal.appendChild(textBox)
    let numberOfPlayers = document.getElementById('numplayers')
    let goButton = document.getElementById('go-button')
    goButton.addEventListener('click', function() {
        if(!numberOfPlayers.value || numberOfPlayers.value > 3) { return }
        startModal.removeChild(textBox)
        let playerTotal = numberOfPlayers.value
        let playerTotalArray = []
        while(playerTotal > 0) {
            playerTotalArray.push(1)
            playerTotal -= 1
        }

        let chooseCharacter = document.createElement('div')
        chooseCharacter.innerHTML = `
        <div class="side-by-side">
            <div class='space' for="numplayers">Player 1 Choose your character</div>
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
        `

        startModal.appendChild(chooseCharacter)
    })
}