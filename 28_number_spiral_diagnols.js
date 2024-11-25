const makeSpiral = (size) =>{
    const matrix = []

    const getIsOnBoard = (x, y) => x >= 0 && x < size && y >= 0 && y < size;

    for(let i = 0; i < size; i++){
        matrix.push([])
    }

    const dirs = [[0, 1], [1, 0],[0, -1],[-1, 0]]
    let x = Math.floor(size/2)
    let y = Math.floor(size/2)
    let curr = 1
    let dirIdx = 3

    while(curr<= Math.pow(size, 2) ){
        matrix[x][y] = curr
        curr++
        const nextDirIdx = (dirIdx + 1) % 4
        const nextDir = dirs[nextDirIdx]
        if(getIsOnBoard(x +nextDir[0] , y + nextDir[1]) && !matrix[x +nextDir[0]][y + nextDir[1]]){
            x += nextDir[0]
            y += nextDir[1]
            dirIdx = nextDirIdx
        } else {
            x += dirs[dirIdx][0]
            y += dirs[dirIdx][1]
        }



    }

    let sum = 0
    let x1 = 0
    let y1 = 0
    let x2 = 0
    let y2 = size - 1

    for(let i = 0; i < size; i++){
        sum += matrix[x1][y1]
        sum += matrix[x2][y2]
        x1 += 1
        y1 +=1
        x2 += 1
        y2 -= 1
    }
    sum -= matrix[Math.floor(size/2)][Math.floor(size/2)]

    console.log(sum)
    return sum

}
console.log(makeSpiral(1001))