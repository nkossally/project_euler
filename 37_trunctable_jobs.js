const primes = new Set()
const composites = new Set()

const getIsPrime = num =>{
    if(num < 2) return false;
    if(primes.has(num)) return true
    if(composites.has(num)) return false;
    let i = Math.floor(num / 2)
    while(i > 1){
        if(num % i === 0){
            composites.add(num)
            return false
        }
        i--
    }
    primes.add(num)
    return true;
}

const getTrunctable = num =>{
    const numStr = num.toString()

    for (let i = 0; i < numStr.length; i++){
        const num1 = parseInt(numStr.slice(i))
        const num2 = parseInt(numStr.slice(0, i))
        if(!getIsPrime(num1)) return false
        if(!getIsPrime(num2)) return false
    }

    return true;
}


const getAllTrunctable = () =>{
    let count = 0;

    let sum = 0;
    let num = 11

    while(count < 11){
        if(getTrunctable(num)){
            console.log(num)
            count++
            sum += num;
        }
        num++
    }

    
    return sum;
}

console.log(getAllTrunctable())