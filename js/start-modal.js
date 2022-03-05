
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

// textBox.classList.add('text-box')



export function setInMotion() {
    startModal.classList.remove('hidden')
    startModal.appendChild(textBox)
    let numberOfPlayers = document.getElementById('numplayers')
    let goButton = document.getElementById('go-button')
    goButton.addEventListener('click', function() {
        if(!numberOfPlayers.value || numberOfPlayers.value > 3) { return }
        let playerTotal = numberOfPlayers.value
        log(playerTotal)
        let chooseCharacter = document.createElement('div')

    })
}