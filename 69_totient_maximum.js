const NUM_TO_RELATIVE_PRIMES = {1: []}

const isRelativelyPrime = (larger, smaller) =>{
    let t = smaller
    while(smaller !== 0){
        let t = larger
        larger = smaller
        smaller =  t % smaller 
    

    }
    return larger === 1

}

const getTotient = num => {

    // 1 is always relatively prime so no need to calculate
    let relPrimeCount = 1

    for(let i = 2; i < num; i++){
        if(isRelativelyPrime(num, i)){
            relPrimeCount++
        }
    }

    return num/relPrimeCount

}

const getTotientMaximum = () =>{
    let max = -1/0;
    for(let i = 510000; i < 520000; i++){
        const totient = getTotient(i)
        if(totient > max){
            max = totient
            console.log(i, max)
        }
    }
    return max
}

console.log(getTotientMaximum())

