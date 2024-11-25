const primes = [2]
const primesSet = new Set([2])
const notPrime = new Set()
const GROUP_SIZE = 4;
const mem = {}
const getIsPrime = num =>{
    if(primesSet.has(num)) return true;
    if(notPrime.has(num)) return false
    for(let i = 0; i < primes.length; i++){
        notPrime.add(num)
        if( num % primes[i] === 0) return false;
    }
    
    primes.push(num)
    primesSet.add(num)
    return true;
}

const hasFourPrimeFactors = num =>{
    if(mem[num] !== undefined){
        return mem[num]
    }
    const factors = []
    let curr = num
    for(let i = 2; i <= num/ 2; i++){
        if(getIsPrime(i) && curr % i === 0){
            while(curr % i === 0){
                curr /= i
            }
            factors.push(i)
            if(factors.length > GROUP_SIZE) return false;
        }
    }
    mem[num] = factors.length === GROUP_SIZE
    return factors.length === GROUP_SIZE;
}

const getNumsWithFourPrimeFactors = () => {
    let num = 2;
    while(num < 1000000000){
        let isValid = true
        for(let i = 0; i < GROUP_SIZE; i++){
            if(!hasFourPrimeFactors(num + i)){
                isValid = false;
                break;
            }

        }
        if(isValid) return num
        num++
    }

}

console.log(getNumsWithFourPrimeFactors())