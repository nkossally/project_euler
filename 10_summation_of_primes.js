const getSumOfPrimes = () => {
    let sum = 2;
    const primes = [2];
    let num = 3

    while(num < 2000000) {
        let i = 0;
        while(i < primes.length){
            if(num % primes[i] === 0){
                break
            }
            i++
        }
        if(i === primes.length){
            primes.push(num)
            // console.log(num, sum)
            sum += num;
        }
        num++
    }
    return sum
}

console.log(getSumOfPrimes())