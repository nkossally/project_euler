const PRIMES = [2, 3, 5]
const MAX = 1000000

const getIsPalindrome = num =>{
    const numStr = num.toString()
    const mid = Math.floor(numStr.length / 2)

    for(let i = 0; i < mid; i++ ){
        if(numStr[i] !== numStr[numStr.length - 1 - i]) return false
    }
    return true
}

const getIsPrime = num =>{
    let i = 2;
    while(i <= Math.pow(num, .5)){
        if(num % i === 0) return false
        i++
    }
    return true
}

const getNextPrime = p =>{
    let curr = p + 1;

    while(!getIsPrime(curr)){
        curr++
    }
    return curr
}

const getNextConsecutivePrimes = () => {
    let p1 = PRIMES[PRIMES.length - 1]
    let curr = p1 + 1;
    let p2

    while(!p2) {
        let i = 0;
        while(i < PRIMES.length){
            const prime = PRIMES[i]
            if(curr % prime === 0) break
            i++
        }
        if(i === PRIMES.length){
            p2 = curr
            break
        }
        curr++
        if(curr > MAX) return [curr, curr]
    }

    PRIMES.push(p2)
    return [p1, p2]
}

const lastDigitsMatch = (a, b) =>{
    const aStr = a.toString()
    const bStr = b.toString()
    let aIdx = aStr.length - 1;
    let bIdx  = bStr.length - 1;
    while(bIdx >= 0 ){
        if(aStr[aIdx] !== bStr[bIdx]){
            return false
        }
        bIdx--
        aIdx--
    }
    return true
}

const getSum = () =>{
    let sum = 0
    let p1 = 5;
    let count = 0

    while(true){
        // const pair = getNextConsecutivePrimes()
        // const p1 = pair[0]
        // const p2 = pair[1]
        const p2 = getNextPrime(p1)

        if(p1 > MAX) break
        let curr = p2
        while(!lastDigitsMatch(curr, p1)){
            curr += p2
        }
        count++
        if(count % 100000) console.log(p1, p2, curr)
        sum += curr
        p1 = p2
    }

    console.log(sum)
    return sum
}

getSum()