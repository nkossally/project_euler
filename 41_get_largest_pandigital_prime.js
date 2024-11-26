const getIsPrime = num =>{
    for(let i = 2; i < num/2; i++){
        if(num % i === 0) return false
    }
    return true

}

const getParandigitalPrimes = () =>{
    let max = -1/0;

    const helper = (str, strLeft) =>{
        const num = parseInt(str)
        if(strLeft.length === 0 && getIsPrime(num)){
            max = Math.max(max, num)
        }

        for(let i = 0; i < strLeft.length; i++){
            helper(str + strLeft[i], strLeft.slice(0, i) + strLeft.slice(i + 1))
        }
    }
    helper("", "1234")
    helper("","12345")
    helper("", "123456")
    helper("", "1234567")
    helper("", "12345678")
    helper("", "123456789")

    return max
}
console.log(getParandigitalPrimes())