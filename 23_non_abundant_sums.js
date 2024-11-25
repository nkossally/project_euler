const mem = {}
const getSumOfDivisors = num =>{
    if(mem[num]) return mem[num]
    let sum = 0
    for(let i = 1; i <= num/2; i++){
        if(num % i === 0){
            sum += i;
        }
    }
    return sum;
}
const getCanBeWrittenAsSum = (num) =>{
    for(let i = 1; i < num; i++){
        const bool1 = getSumOfDivisors(i) > i
        const bool2 = getSumOfDivisors(num -i) > num - i
        if(bool1 && bool2) return true;
    }
    return false;

}

const getSum = () =>{
    let sum = 0
    for(let i = 1; i < 28124; i++){
        if(!getCanBeWrittenAsSum(i)){
            sum += i
        }
    }
    return sum;
}

console.log(getSum())
