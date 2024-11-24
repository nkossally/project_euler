const getFracAfterTreeSevenths = () =>{
    const fractions = []
    const fractionToNumAndDenom = {}
    let num
    let denom
    let bestDiff = .01
    for(let i = 2; i <= 1000000; i++){
        const minJ = Math.ceil((3/7 - bestDiff)*i)
        const maxJ = Math.floor((3/7)*i)

        for(let j = minJ; j < maxJ; j++){
            if(i % j !== 0){
                // console.log(j, i, j/i)
                val = j/i
                if(val < 3/7 && 3/7 - val < bestDiff){
                    num = j
                    denom = i
                    bestDiff = 3/7 - val
                    console.log(num, denom, bestDiff)
                }
            }

        }

    }
    return num
}
console.log(getFracAfterTreeSevenths())