import * as board from './board.js';
import { showHand } from './playmat.js';
export function log(a) {
    console.log(a)
}


log(board)
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


let highlightArr = []
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
function fillHighlightRangeArray(range, location) {
    let counter = range*2
    let rows = indexesOfHexMatrix[location].row
    let columns = indexesOfHexMatrix[location].column
    while(counter > 0) {
        columns += 1
        for(let i = 0; i < indexesOfHexMatrix.length; i++ ) {
            if(indexesOfHexMatrix[i].rows) {
            //log(indexesOfHexMatrix[rows][columns])
            }   
        }
        
        counter = counter -1 
    }
    //counter = range*2
    // while(counter > 0) {
    //     let subcolumn = columns
    //     subcolumn = subcolumn - 1
    //     if(indexesOfHexMatrix[rows][subcolumn] != '') {
    //         log(indexesOfHexMatrix[rows][subcolumn])
    //         highlightRangeArray.push(indexesOfHexMatrix[rows][subcolumn])
    //     }
    //     counter = counter -1 
    // }
}

boardArray.forEach(element => {
    getAllIndexesOfHexMatrix(element)
})

log(indexesOfHexMatrix)
fillHighlightRangeArray(2, 0)
log(highlightRangeArray)
log(indexesOfHexMatrix[5][10])







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

 