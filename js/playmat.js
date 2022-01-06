import { log } from "./main.js";

export const showHand = document.getElementById('hand');
const playmat = document.getElementById('playmat')
const hand = [
    {name: 'action', value: 1},
    {name: 'action', value: 2},
    {name: 'action', value: 3},
    {name: 'action', value: 4},
    {name: 'action', value: 1},
    {name: 'action', value: 2},
    {name: 'action', value: 3},
    {name: 'action', value: 4},
    {name: 'action', value: 3},
    {name: 'action', value: 4},
    {name: 'action', value: 1},
    {name: 'action', value: 2},
    {name: 'action', value: 3},
    {name: 'action', value: 4},
    {name: 'action', value: 5}
]
let display = false;
showHand.addEventListener('click', function() {
    if(!display) {
        console.log('hello from the console.')
        let modal = document.createElement('div')
        modal.classList.add('modal')
        hand.forEach(element => {   
            let card = document.createElement('div')
            card.classList.add('modal-card')
            card.innerHTML = `
                <div>${element.name}</div>
                <div>${element.value}</div>
            `;
            modal.appendChild(card)

        });
        
        
        
        playmat.appendChild(modal)
        
        

        display = !display 
    }
    else {
        playmat.removeChild(playmat.lastChild)
        display = !display
    }
    
})

function createCard(array) {
    array.forEach(element => {
        
    })
}