
const getIsValid = (a, b, target) =>{
    return Math.pow(Math.pow(a, 2) + Math.pow(b, 2), .5) === target;
}

const integerRightTriangles = () =>{

    const numToCount = {}
    let bestCount = -1/0
    let bestNum

    for(let a = 1; a < 1000; a++){
        for(let b = a; b < 1000; b++){
            const c = Math.pow(Math.pow(a, 2) + Math.pow(b, 2), .5)
            const p = a + b + c
            if(c === Math.floor(c) && p <= 1000){
                console.log( a, b, c, p)
                if(!numToCount[p]){
                    numToCount[p] = 1
                } else {
                    numToCount[p]++
                }
                if(numToCount[p] > bestCount){
                    bestCount = numToCount[p]
                    bestNum = p
                }
            }

        }
    }

    return bestNum

}

console.log(integerRightTriangles())