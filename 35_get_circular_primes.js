const composites = new Set([])
const primes = new Set([2])

const getIsPrime = (num) =>{
    // if(num < primes[primes.length - 1]){
    //     return primesSet.has(num)
    // }
    if(primes.has(num))return true
    if(composites.has(num)) return false

    for(let i = 2; i <= num/ 2; i++){
        if(num % i === 0) {
            composites.add(num);
            return false
        }
    }
    primes.add(num)
    return true

}

const getIsCircular = num => {

    const numStr = num.toString()

    for(let i = 0; i < numStr.length; i++){
        const rotation = parseInt(numStr.slice(i) + numStr.slice(0, i))
        if(!getIsPrime(rotation)){
            return false
        }
    }

    return true
}


const getCircularCounts = () =>{
    let count = 0
    for(let i = 2; i < 1000000; i++ ){
        if(getIsCircular(i)){
            console.log(i)
            count++
        }
    }
    return count
}

console.log(getCircularCounts())
