const MAX_NUM = 1000000000
const MAX_ROOT = Math.floor(Math.pow(MAX_NUM, .5)) 

const getIsPalindrome = num =>{
    const numStr = num.toString()
    for(let i = 0; i < numStr.length/2; i++){
        if(numStr[i] !== numStr[numStr.length - 1 - i]) return false

    }
    return true
}

const getSumOfPalindroms = () =>{
    let totalSum = 0
    for(let i = 2; i <= MAX_ROOT; i++){
        for(let j= 1; j < i; j++){
            let sum = 0;
            for(let k = j; k <= i; k++){
                sum += k * k
                if(sum > MAX_NUM) break
            }
            if(sum < MAX_NUM && getIsPalindrome(sum)){
                totalSum += sum
                if(i % 100 === 0) console.log(i, j, totalSum)
            }

        }
    }
    return totalSum

}

console.log(getSumOfPalindroms())