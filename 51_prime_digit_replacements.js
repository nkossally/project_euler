const badNums = new Set()
const primes = []
const SIZE_OF_FAMILY = 8;
const getIsPrime = num =>{
    for(let i = 0; i < primes.length; i++){
        if(num % primes[i] === 0) return false

    }
    primes.push(num)
    return true;
}
const getIsPrime_v2 = num =>{
    let i = Math.floor(num / 2)
    while(i > 1){
        if(num % i === 0) return false
        i--
    }
    return true;
}

const getNIndices = (num, n) =>{
    indicesCollection = []
    const numStr = num.toString()

    const helper = (idx, indices)  => {
        if(indices.length === n){
            indicesCollection.push(indices)
            return
        }
        if(idx === numStr.length) return;

        const digitStr = numStr[idx]
        if(indices.length === 0 || numStr[indices[indices.length - 1]] === digitStr){
            helper(idx + 1, [...indices, idx])
        }
        helper(idx + 1, [...indices])


    }
    helper(0, [])
    return indicesCollection
}

const tryNReplacements = (num, n) => {
    const numStr = num.toString()
    let family = []

    const helper = (indices, strSoFar, chosenNumber) => {
        const idx = strSoFar.length
        if(strSoFar.length === numStr.length){
            const parsed = parseInt(strSoFar)
            if(getIsPrime_v2(parsed)){
                family.push(parsed)
            }
            return
        }
        if(indices.includes(idx)){
            if(chosenNumber !== undefined){
                if(!(chosenNumber === 0 && idx === 0)){
                    helper(indices, strSoFar + chosenNumber.toString(), chosenNumber)
                }
            } else {
                for(let i = 0; i <= 9; i++){
                    if(!(i === 0 && idx === 0)){
                        helper(indices, strSoFar + i.toString(), i)
                    }
                }
            }
        } else {
            helper(indices, strSoFar + numStr[idx], chosenNumber)
        }
    }

    for(let i = 1; i < numStr.length; i++){
        const indicesCollection = getNIndices(num, i);
        for(let j = 0; j < indicesCollection.length; j++){
            family = [];
            const indices = indicesCollection[j];
            helper(indices, "", undefined);
            family.forEach(num =>{
                badNums.add(num)
            })

            if(family.length === SIZE_OF_FAMILY){
                return true;
            }
        }
    }
    return false

}

const hasFamilyOfEight = (num) => {
    for(let i = 1; i < num.toString().length; i++){
        if(tryNReplacements(num, i)){
            return true;
        }
    }
    return false;
}

const getSmallestPrimeWithEightReplacements = () => {
  let num = 2;


  while (true) {
    if (getIsPrime(num)) {
      // console.log(num)
      if (hasFamilyOfEight(num)) {
        return num;
      }
    }
    num++;
  }
};

console.log(getSmallestPrimeWithEightReplacements())