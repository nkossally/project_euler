getSmallestNumMultiplications = exp => {
    let bestCount = 1/0;

    const helper = (currExp, exps, count) =>{
        if(count > bestCount) return
        if(currExp === exp){
            bestCount = Math.min(bestCount, count)
            return
        }
        for(let i = exps.length - 1; i >= 0; i--){
            const newExp = currExp + exps[i]
            if(newExp <= exp){
                const newExps = [...exps]
                if(newExp > exps[exps.length - 1]){
                    newExps.push(newExp)
                }
                helper(newExp, newExps, count + 1)
            }
        }

    }
    helper(1, [1], 0)
    return bestCount

}

const getSum = () =>{
    let sum = 0;

    for(i = 2; i <= 200; i++ ){
        sum += getSmallestNumMultiplications(i)
        console.log(i, sum)
    }

    console.log(sum)
    return sum;
}

getSum()