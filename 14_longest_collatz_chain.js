const getChainLength = num => {
    let count = 1;
    let curr = num;
    while(curr !== 1){
        if(curr % 2 === 0){
            curr /= 2;
        } else {
            curr = 3*curr + 1
        }
        count++
    }
    return count

}
const getLongestSequence = () => {
    let longestChainStart;
    let longest = 1;
    for(let i = 1; i < 1000000; i++){
        const length = getChainLength(i)
        if(length > longest){
            longest = length
            longestChainStart = i;
        }
    }
    return longestChainStart

}

console.log(getLongestSequence())