
import { log } from './main.js'

const startModal = document.getElementById('start-game')

let textBox = document.createElement('div')
textBox.innerHTML = `
<div class="side-by-side">
    <label class='space' for="numplayers">How many players do you have?</label>
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
                <div style='
                    min-width: 100px; 
                    min-height: 100px; 
                    background-color: white;
                    border: 2px solid black;
                    border-radius: 10px;
                    '>
                </div>

                <div style='
                    min-width: 100px; 
                    min-height: 100px; 
                    background-color: white;
                    border: 2px solid black;
                    border-radius: 10px;
                    '>
                </div>

                <div style='
                    min-width: 100px; 
                    min-height: 100px; 
                    background-color: white;
                    border: 2px solid black;
                    border-radius: 10px;
                    '>
                </div>
        </div>
        `
        startModal.appendChild(chooseCharacter)
    })
}