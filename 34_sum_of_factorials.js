const factorial = {0: 1, 1: 1, 2: 2}
let highetsVal = 2

const getFactorial = num =>{
    if(factorial[num]){
        return factorial[num]
    }
    let curr = highetsVal
    let prod = factorial[highetsVal]

    while(curr < num){
        curr += 1
        prod *= curr
        factorial[curr] = prod
    }
    highetsVal = num
    return prod

}

const getIsValidFactorialSum =  num =>{
    let sum = 0;

    const digits = num.toString().split("").map(elem => parseInt(elem))


    for(let i= 0; i < digits.length; i++){
        sum += getFactorial(digits[i])

    }
    if(sum === num){
        return true;
    }

}

const getProdOfValidNums = () =>{
    let sum = 0;

    for(let i= 3; i < 2000000; i++){
        if(getIsValidFactorialSum(i)){
            console.log(i)
            sum += i
        }
    }
    return sum
}
console.log(getProdOfValidNums())
