const getCancels = (a, b, d) =>{
    // let b bet the number in common
    if((10 * a + b)/(10*b + d) === a/d){
        return [10 * a + b, 10*b + d, a, d]
    }
    if((10 * a + b)/(10*d + b) === a/d){
        return [10 * a + b, 10*d + b, a, d]
    }
    return false
}

const getAllValidFractions = () =>{
    const validFractions = []
    for(let i = 1; i <= 9; i++){
        for(let j = 1; j <= 9; j++){
            for(let k = i + 1; k <= 9; k++){
                const validFracs = getCancels(i, j, k)
                if(validFracs){
                    validFractions.push(validFracs)
                }
            }
        
        }
    
    }
    return validFractions
}

console.log(getAllValidFractions())

