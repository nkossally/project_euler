const numToPair = {}

const primes = [2, 3]

const TARGET_PAIRS_SET_SIZE = 5

const MAX_NUM = 9000

const getIsPrimeV2 = (num) =>{
    for(let i = 0; i < primes.length;i++){
        if(num % primes[i] === 0) return false
    }
    return true
}

const getIsPrime = (num) =>{
    let i = 2
    while(i < num/2){
        if(num % i === 0) return false;
        i++
    }
    return true
}

const getAllPairs = () => {
    let possiblePrime = 5
    while(possiblePrime < MAX_NUM){
        if(getIsPrime(possiblePrime)){
            addToPairs(possiblePrime)
            primes.push(possiblePrime)
        }
        possiblePrime++
    }
}

const canConcatenate = (num1, num2) => {
    const num3 = parseInt(num1.toString() + num2.toString())
    const num4 = parseInt(num2.toString() + num1.toString())
    if(getIsPrimeV2(num3) && getIsPrimeV2(num4)){
        return true
    }
    return false
}

const addToPairs = (num) => {
    for(let i = 0; i < primes.length; i++){
        if(canConcatenate(primes[i], num)){
            if(!numToPair[num]) numToPair[num] = []
            if(!numToPair[primes[i]]) numToPair[primes[i]] = []
            numToPair[num].push(primes[i])
            numToPair[primes[i]].push(num)
        }
    }
}


const getValidSubsets = num =>{
    const pairs = numToPair[num]
    let bestSum = 1/0

    const checkAllSubsets = (idx, subset) =>{
        if(idx === pairs.length){
            if(subset.length >= TARGET_PAIRS_SET_SIZE - 1){
                let arr = [...subset, num]
                arr.sort()
                arr.slice(0, 5)
                const sum = arr.reduce((a, b) => a + b, 0)
                if(sum < bestSum){
                    console.log(arr, sum)
                }
                bestSum = Math.min(bestSum, sum)
            }
            return;
        }
        checkAllSubsets(idx + 1, [...subset])
        const curr = pairs[idx]

        if(subset.length === 0){
            checkAllSubsets(idx + 1, [curr])
        } else {
            for(let i = 0; i < subset.length; i++){
                if(!canConcatenate(curr, subset[i])){
                    return
                }
            }
            checkAllSubsets(idx + 1, [...subset, curr])
        }
    }

    checkAllSubsets(0, [])
    return(bestSum)
}

const getBestSubset = () =>{
    let result = 1/0
    getAllPairs()
    console.log(numToPair)
    Object.keys(numToPair).forEach(numStr => {
        result = Math.min(result, getValidSubsets(parseInt(numStr)))
    })
}

getBestSubset()