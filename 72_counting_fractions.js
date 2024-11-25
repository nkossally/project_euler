const MAX_DENOM = 1000000;

// const haveNoCommonFactors = (a, b) =>{
//     let min = Math.min(a, b)
//     let max = Math.max(a, b)
//     const leftOver = min - (max % min)
//     return max % leftOver !== 0;
    
// }


const haveNoCommonFactors = (a, b) =>{

    let min = Math.min(a, b)
    let max = Math.max(a, b)
    if(max % min === 0) return false
    for(let i = 2; i < min; i++){
        if(min % i === 0 && max % i === 0){
            return false
        }
    }
    return true
    
}


const getFractionCount = () => {
    let count = 0;

    for(let i = 2; i <= MAX_DENOM; i++){
        for(let j = 1; j < i; j++){
            if (j === 1|| haveNoCommonFactors(j, i)){
                count++
            }
        }
    }
    return count;
}
console.log(getFractionCount())