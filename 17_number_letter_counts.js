const numToLetterCount = {
  1: 3,
  2: 3,
  3: 5,
  4: 4,
  5: 4,
  6: 3,
  7: 5,
  8: 5,
  9: 4,
  10: 3,
  11: "eleven".length,
  12: "twelve".length,
  13: "thirteen".length,
  14: "fourteen".length,
  15: "fifteen".length,
  16: "sixteen".length,
  17: "seventeen".length,
  18: "eighteen".length,
  19: "nineteen".length,
  20: 6,
  30: 6,
  40: 5,
  50: "fifty".length,
  60: 5,
  70: 7,
  80:6,
  90: 6,
};

const getCounts = () =>{
    let sum = 0;
    for(let i = 1; i <= 1000; i++){
        const ones = i % 10;
        const multipleOfTen = (i % 100) - ones
        const possibleTeen = (i % 100)
        const  hundreds = (i % 1000) - ones - multipleOfTen
        if(ones > 0 && !(possibleTeen >10 && possibleTeen < 20) ){
            sum += numToLetterCount[ones]
        }
        if(possibleTeen >= 10 && possibleTeen < 20){
            sum += numToLetterCount[possibleTeen]
        } 
        if(multipleOfTen >= 20){
            sum += numToLetterCount[multipleOfTen]
        }
        if(hundreds > 0){
            sum += numToLetterCount[hundreds/100] + "hundred".length
            if(possibleTeen > 0){
                sum += "and".length
            }
        }
        if(i === 1000){
            sum += "onethousand".length
        }
        console.log("num", i, "ones", ones, "multipleOfTen", multipleOfTen,"possibleTeen", possibleTeen,"hundreds", hundreds)
    }
    return sum
}
console.log(getCounts());