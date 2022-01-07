import * as board from './board.js';
import { showHand } from './playmat.js';
export function log(a) {
    console.log(a)
}



const canvas = document.getElementById('canvas');



const boardArray = []
function buildBoard(array) {
    for(let i = 0; i < 91; i++) {
        array.push(i)
    }
}
buildBoard(boardArray)



const hexMatrix = [
    ['','','','','',85,'',86,'',87,'',88,'',89,'',90,'','','','',''],
    ['','','','',84,'',56,'',57,'',58,'',59,'',60,'',61,'','','',''],
    ['','','',83,'',55,'',33,'',34,'',35,'',36,'',37,'',62,'','',''],
    ['','',82,'',54,'',32,'',16,'',17,'',18,'',19,'',38,'',63,'',''],
    ['',81,'',53,'',31,'',15,'',5,'',6,'',7,'',20,'',39,'',64,''],
    [80,'',52,'',30,'',14,'',4,'',0,'',1,'',8,'',21,'',40,'',65],
    ['',79,'',51,'',29,'',13,'',3,'',2,'',9,'',22,'',41,'',66,''],
    ['','',78,'',50,'',28,'',12,'',11,'',10,'',23,'',42,'',67,'',''],
    ['','','',77,'',49,'',27,'',26,'',25,'',24,'',43,'',68,'','',''],
    ['','','','',76,'',48,'',47,'',46,'',45,'',44,'',69,'','','',''],
    ['','','','','',75,'',74,'',73,'',72,'',71,'',70,'','','','','']
]



const indexesOfHexMatrix = []

function getAllIndexesOfHexMatrix(hexPosition) {
    for(let i = 0; i < hexMatrix.length; i++) {
        for(let j = 0; j < hexMatrix[i].length; j++) {
            if(hexMatrix[i][j] === hexPosition) {
                let index = {
                    
                    row: i,
                    column: j
                }
                indexesOfHexMatrix.push(index)
            }    
        }
    }
}

let highlightRangeArray = []
function fillRight(range, row, column) {
    let counter = range*2
    let rows = row
    let columns = column
    while(counter > 0) {
        columns += 1
        if(hexMatrix[rows][columns] != '') {
            highlightRangeArray.push(hexMatrix[rows][columns])
        }
        counter = counter -1 
    }
}
function fillLeft(range, row, column) {
    let counter = range*2
    let rows = row
    let columns = column
    while(counter > 0) {
        columns -= 1
        if(hexMatrix[rows][columns] != '') {
            highlightRangeArray.push(hexMatrix[rows][columns])
        }
        counter = counter -1 
    }
}

function fillUp(range, row, column) {
    let counter = range
    let rows = row
    let columns = column
    while(counter > 0) {
        rows -= 1
        
        if(hexMatrix[rows][columns] != '') {
            highlightRangeArray.push(hexMatrix[rows][columns])

        }
        fillRight(counter, rows, columns)
        fillLeft(counter, rows, columns)
        counter -= 1 
    }
}
function fillDown(range, row, column) {
    let counter = range
    let rows = row
    let columns = column
    while(counter > 0) {
        rows += 1
        
        if(hexMatrix[rows][columns] != '') {
            highlightRangeArray.push(hexMatrix[rows][columns])

        }
        fillRight(counter, rows, columns)
        fillLeft(counter, rows, columns)
        counter -= 1 
    }
}


function fillHighlightRangeArray(range, location) {
    let row = indexesOfHexMatrix[location].row
    let column = indexesOfHexMatrix[location].column
    fillRight(range, row, column)
    fillLeft(range, row, column)
    fillUp(range, row, column)
    fillDown(range, row, column)
    
}
log(highlightRangeArray)
function fillRangeHexes(array) {
    for(let i = 0; i <= array.length; i++) {
        let inRange = document.getElementById(`${array[i]}`)
        inRange.classList.add('range')
        
    }
}





boardArray.forEach(element => {
    getAllIndexesOfHexMatrix(element)
})


log(highlightRangeArray[0])
log(indexesOfHexMatrix)
fillHighlightRangeArray(1, 0)
fillRangeHexes(highlightRangeArray)










// let merchantOne = [];
// let fire = {
//     name: 'fire',
//     damage: 5,

// }

// function merchantDeck(array, object) {
//     for(let i = 0; i < 10; i++) {
//         array.push(object)
//     }
// }

// merchantDeck(merchantOne, fire)

// log(merchantOne)

 