const getDivisorsCount = num => {
    let count = 0;
    for( let i = 1; i <= num; i++){
        if(num % i === 0) count++
    }
    return count
}

const get500Divisors = () =>{
    let curr = 1;
    let sum = 0;
    while(getDivisorsCount(sum) < 500){
        // console.log(sum, curr,getDivisorsCount(sum) )
        sum += curr
        curr++
    }
    return sum
}

console.log(get500Divisors())

const getGreatestCommonFactor = (num1, num2) =>{
    const min = Math.min(num1, num2);
    const max = Math.max(num1, num2 );
    let gcd = min
    while(!(min % gcd === 0 && max % gcd === 0)){
        gcd--
    }
    return gcd
}

// const get500Divisors = () =>{
//     let divisorCount = 1;
//     let sum = 1
//     while(getDivisorsCount(sum) < 500){
//         console.log(sum, curr,getDivisorsCount(sum) )
//         sum += curr
//         curr++
//     }
//     return sum
// }

