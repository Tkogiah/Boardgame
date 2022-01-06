

export const showHand = document.getElementById('hand');
const playmat = document.getElementById('playmat')
const hand = [
    {name: 'action', value: 1},
    {name: 'action', value: 2},
    {name: 'action', value: 3},
    {name: 'action', value: 4},
    {name: 'action', value: 5}
]

showHand.addEventListener('click', function() {
    console.log('hello from the console.')
    let modal = document.createElement('div')
    modal.classList.add('modal')
    playmat.appendChild(modal)
})

