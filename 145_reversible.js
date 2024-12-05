const onlyOddDigits = num =>{
    curr = num
    while(curr > 0){
        lastDig = curr  % 10;
        if(lastDig % 2 === 0){
            return false
        }
        curr = (curr - lastDig)/10
    }
    return true
}

const getIsReverisble = num =>{
    const reverse = parseInt(num.toString().split("").reverse().join(""))
    const sum = num + reverse
    return onlyOddDigits(sum)
}

const getReversibleCount = () =>{
    let count = 0;
    for(let i = 1; i <= 1000000000; i++){
        if(i % 10 !== 0 && getIsReverisble(i)){
            count++
            if(count % 100000 === 0) console.log(i, count)
        }
    }
    return count
}

console.log(getReversibleCount())
