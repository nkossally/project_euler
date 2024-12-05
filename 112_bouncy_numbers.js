
const getIsBouncy = num => {
    let isIncreasing = false;
    let isDecreasing = false;

    const numStr = num.toString()

    for(let i = 0; i < numStr.length; i++){
        for(let j = i + 1; j < numStr.length; j++){
            const num1 = parseInt(numStr[i]);
            const num2 = parseInt(numStr[j]);
            if(num2 > num1) isIncreasing = true
            if(num2 < num1) isDecreasing = true
            if(isIncreasing && isDecreasing) return true;
        }
    }

    return false;
}

const getLowestNumberWith99Bouncy = () => {
   let bouncyCount = 0;
   let i = 101;

   while(true){
    if(getIsBouncy(i)){
        bouncyCount++
    }
    if(bouncyCount / i >= .99) return i

    i++
   }
}

console.log(getLowestNumberWith99Bouncy())