import { log } from './main.js'
import { highlightRangeArray } from './movement-range.js'
export function $(id) {
    if(typeof id === 'string' || id instanceof String) {
        return document.getElementById(id)
    }
    else {
        return id[0]
    }
}
export function name(id, name) {
    $(id).innerText = `Name: ${name}` 
}
export function damage(id, damage) {
    $(id).innerText = `Damage: ${damage}` 
}
export function range(id, range) {
    $(id).innerText = `Range: ${range}` 
}
export function speed(id, speed) {
    $(id).innerText = `Speed: ${speed}` 
}
export function money(id, money) {
    $(id).innerText = `Money: $${money}` 
}
export function photo(id, url) {
    $(id).style.backgroundImage = `url(${url})`
}
export function level(id, level) {
    $(id).innerText = `Level: ${level}`
}
export function draw(id, arrayLength) {
    $(id).innerText = `Draw: (${arrayLength})`
}
export function discard(id, arrayLength) {
    $(id).innerText = `Discard: (${arrayLength})`
}
export function enemyTakesDamage(location, damage) {
    document.getElementById(location).classList.add('enemy')
    document.getElementById(location).addEventListener('click', (e) => {
        log(`you did ${damage} damage`)
    }) 
}


