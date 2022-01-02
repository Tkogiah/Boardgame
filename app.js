function log(a) {
    console.log(a)
}

const canvas = document.getElementById('canvas')

const boardSpaces = []


for(let i = 0; i <= 90; i++) {
    let hexagon = {
        name: `space${i}`,


    }
    if(i >= 1 && i <= 6) {
        hexagon.money = 1
    }
    else if(i >= 7 && i <= 18) {
        hexagon.money = 2
    }
    else if(i >= 19 && i <= 36) {
        hexagon.money = 3
    }
    else if(i >= 37 && i <= 60) {
        hexagon.money = 4
    }
    else if(i >= 61 && i <= 90) {
        hexagon.money = 5
    }
    else {
        hexagon.money = 0
    }

    boardSpaces.push(hexagon)
}
log(boardSpaces)
