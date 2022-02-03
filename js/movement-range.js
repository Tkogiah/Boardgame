function log(a) {
    console.log(a)
}
const hexMatrix = [
    ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','',85,'',86,'',87,'',88,'',89,'',90,'','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','',84,'',56,'',57,'',58,'',59,'',60,'',61,'','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','',83,'',55,'',33,'',34,'',35,'',36,'',37,'',62,'','','','','','','','','','','','',''],
    ['','','','','','','','','','','','',82,'',54,'',32,'',16,'',17,'',18,'',19,'',38,'',63,'','','','','','','','','','','',''],
    ['','','','','','','','','','','',81,'',53,'',31,'',15,'', 5,'', 6,'', 7,'',20,'',39,'',64,'','','','','','','','','','',''],
    ['','','','','','','','','','',80,'',52,'',30,'',14,'', 4,'', 0,'', 1,'', 8,'',21,'',40,'',65,'','','','','','','','','',''],
    ['','','','','','','','','','','',79,'',51,'',29,'',13,'', 3,'', 2,'', 9,'',22,'',41,'',66,'','','','','','','','','','',''],
    ['','','','','','','','','','','','',78,'',50,'',28,'',12,'',11,'',10,'',23,'',42,'',67,'','','','','','','','','','','',''],
    ['','','','','','','','','','','','','',77,'',49,'',27,'',26,'',25,'',24,'',43,'',68,'','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','',76,'',48,'',47,'',46,'',45,'',44,'',69,'','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','',75,'',74,'',73,'',72,'',71,'',70,'','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','']
]

const indexesOfHexMatrix = []//GIVES ALL HEX INDEXES CALCULATING RAN
 

//BUILDS AND RETURNS AN ARRAY OF 0-90 WHEN CALLED
function boardHexes() {
    let arrayOfHexes = []
    for(let i = 0; i < 91; i++) {
        arrayOfHexes.push(i)
    }
    return arrayOfHexes
}
//FINDS AND STORES IN AN ARRAY THE ADDRESS WITHIN MATRIX WHERE 0-90 IS LOCATED
function buildArrayOfAllHexIndexes(array, matrix) {
    boardHexes().forEach(element => {
        for(let i = 0; i < matrix.length; i++) {
            for(let j = 0; j < matrix[i].length; j++) {
                if(matrix[i][j] === element) {
                    let index = {
                        row: i,
                        column: j
                    }
                    array.push(index)
                }    
            }
        }
    })
}
buildArrayOfAllHexIndexes(indexesOfHexMatrix, hexMatrix)

//ALGORITHMS TO HIGHLIGHT RANGE BASED ON CHARACTER RANGE
export let highlightRangeArray = []
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
    let counter2 = range*2
    let rows = row
    let columns = column
    while(counter > 0) {
        rows -= 1
        counter2 = counter2 - 1
        fillRight(counter2/2, rows, columns)
        fillLeft(counter2/2, rows, columns)
        if(hexMatrix[rows][columns] != '') {
            highlightRangeArray.push(hexMatrix[rows][columns])   
        }
        counter = counter -1 
    }   
}
function fillDown(range, row, column) {
    let counter = range
    let counter2 = range*2
    let rows = row
    let columns = column
    while(counter > 0) {
        rows += 1
        counter2 = counter2 - 1
        fillRight(counter2/2, rows, columns)
        fillLeft(counter2/2, rows, columns)
        if(hexMatrix[rows][columns] != '') {
            highlightRangeArray.push(hexMatrix[rows][columns])   
        }
        counter = counter -1 
    }
}
function highlightHexes(array, color) {
    array.forEach((e) => {
        if(e <=90 ){
            let hexColor = document.getElementById(e)
            hexColor.classList.add(color)
            if(e == array[0]) {hexColor.classList.add('blue')}
            if(hexColor.classList.contains('red') && hexColor.classList.contains('yellow')) {
                hexColor.classList.add('green')
            }
            
        }
    })
}

export function clearHighlightedHexes() {
    for(let i = 0; i <= 90; i++) {
        let hex = document.getElementById(i)
        hex.classList.remove('red')
        hex.classList.remove('yellow')
        hex.classList.remove('green')
        hex.classList.remove('blue')
        
    }
}

export function fillHighlightRangeArray(range, attacks, location) {
   
    if(attacks < 1) {return}
    highlightRangeArray = []
    if(range >= 10) {
       return highlightHexes(boardHexes(), 'red')   
    } 
    let row = indexesOfHexMatrix[location].row
    let column = indexesOfHexMatrix[location].column
    highlightRangeArray.push(location)
    fillRight(range, row, column)
    fillLeft(range, row, column)
    fillUp(range, row, column)
    fillDown(range, row, column)
    // highlightRangeArray.sort((a,b) => a-b)
    highlightHexes(highlightRangeArray, 'red')
    
}



export function fillHighlightMovementArray(speed, movement, location) {
    let highlightMovementArray = []
    let beginningPoint = parseInt(location)-parseInt(movement)
    let endPoint = parseInt(location)+parseInt(movement);
    highlightMovementArray.push(location)
   
    for (let i = beginningPoint; i<= endPoint; i++) {

        if(i >= 0 && i != location && i <= endPoint) {
            highlightMovementArray.push(i)
        }    
    }
    //highlightMovementArray.sort((a,b) => a-b)
    highlightHexes(highlightMovementArray, 'yellow')
}

