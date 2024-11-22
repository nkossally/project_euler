const primes = [2, 3];

const getPrime = () => {
    let num = 5
    while(primes.length < 10001) {
        let i = 0;
        while(i < primes.length){
            if(num % primes[i] === 0){
                break
            }
            i++
        }
        if(i === primes.length){
            primes.push(num)
        }
        num++
    }
    return primes[10000]
}

console.log(getPrime())