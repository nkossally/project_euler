const getCanBeWrittenAsSumOfFifths = (num) =>{
    const arr = num.toString().split("").map(elem => parseInt(elem))
    let sum = 0;
    for(let i = 0; i< arr.length; i++){
        sum += Math.pow(arr[i], 5)
        if(sum > num) return false
    }
    return sum === num

} 

const getSumOfAll = () =>{
    let sum = 0;

    for(let i = 2; i < 1000000; i++){
        if(getCanBeWrittenAsSumOfFifths(i)){
            sum += i
        }
    }
    return sum
}


console.log(getSumOfAll())