const getSumOfDivisors = num =>{
    let sum = 0;
    for(let j = 1; j <= Math.floor(num/2); j++){
        if(num % j === 0){
            console.log(j, "divides", num)
            sum += j
        }
    }
    return sum
}
const getAmicableNumbers = () => {
    let seen = new Set()
    let amicableNumbers = []
    let sumOfAmicableNumbers = 0

    for(let i = 1; i < 10000; i++){
        if(seen.has(i)) continue
        const sum1 = getSumOfDivisors(i)
        const sum2 = getSumOfDivisors(sum1)
        if(sum2 === i && i !== sum1){
            console.log(i, sum1)
            sumOfAmicableNumbers += (i + sum1)
        }
        seen.add(i)
        seen.add(sum1)
    }
    return sumOfAmicableNumbers;

}

console.log(getAmicableNumbers())
