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
export function name(id, index) {
    $(id).innerText = `Name: ${index.name}` 
}
export function damage(id, index) {
    $(id).innerText = `Damage: ${index.damage}` 
}
export function range(id, index) {
    $(id).innerText = `Range: ${index.range}` 
}
export function speed(id, index) {
    $(id).innerText = `Speed: ${index.speed}` 
}
export function money(id, index) {
    $(id).innerText = `Money: $${index.money}` 
}
export function photo(id, index) {
    $(id).style.backgroundImage = `url(${index.picture})`
}
export function level(id, index) {
    $(id).innerText = `Level: ${index.level}`
}
export function draw(id, index) {
    $(id).innerText = `Draw: (${index.length})`
}
export function discard(id, index) {
    $(id).innerText = `Discard: (${index.length})`
}


export function enemyTakesDamage(location, damage) {
     
}


