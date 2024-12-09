const getIsDigitalPowerSum = num => {
    let sum = 0;
    let curr = num;
    while(curr > 0){
        sum += (curr % 10)
        curr = (curr - (curr % 10)) / 10
    }
    curr = num
    if(sum === 1) return false
    while(curr > 1 && curr % sum === 0){
        curr /= sum

    }
    return curr === 1;
}

const getThirtieth = () =>{
    let count = 0;
    let digitalPowerSum
    let curr = 614657;
    while(count < 20){
        if(getIsDigitalPowerSum(curr)){
            count++
            digitalPowerSum = curr
            console.log(count, digitalPowerSum)
        }
        curr++
    }
    console.log(digitalPowerSum)
    return digitalPowerSum
}

getThirtieth()
// console.log(getIsDigitalPowerSum(614656))