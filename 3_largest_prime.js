const getIsPrime = num =>{
  let factor = Math.floor(num /2)
  while(factor > 1){
    if(num % factor === 0){
      return false
    }
    factor--;
  }
  return true;
}

const getOtherFactor = (largerNum, factor) =>{
  while(largerNum % factor === 0){
    largerNum /= factor
  }
  return largerNum
}

const getLargestPrimeFactor = (num) => {

  let max = num;
  let curr = 2;
  let lpf = -1 / 0;
  // const numsToTry = [num];
  // const seenNums = new Set()
  while(curr <= max){
    if(num % curr === 0){
      const otherFactor = getOtherFactor(num, curr)
      max = Math.min(max, otherFactor)
      if(getIsPrime(curr)){
        lpf = Math.max(curr, lpf)
      }
    }
    curr++

  }

  return lpf;
};

console.log(getLargestPrimeFactor(600851475143));
