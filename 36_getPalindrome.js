const isPalindrome = str =>{
    for(let i = 0; i < str.length/2; i++){
        if(str[i] !== str[str.length - 1 - i]){
            return false;
        }
    }
    return true
}

const getSumOfAllPalindromes = () =>{
    let sum = 0;

    for(let i = 1; i < 1000000; i++){
        if(isPalindrome(i.toString()) && isPalindrome(i.toString(2))){
            console.log(i)
            sum += i
        }
    }
    return sum
}

console.log(getSumOfAllPalindromes())