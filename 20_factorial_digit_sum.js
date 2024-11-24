


const multiplyArrayByNum = (numArr, num, pow) => {
  if (num === 0) {
    return [0];
  }
  const newArr = [...numArr];

  for (let i = 0; i < pow; i++) {
    newArr.push(0);
  }

  let idx = newArr.length - 1;
  let carryOver = 0;
  while (idx >= 0) {
    const product = num * newArr[idx] + carryOver;
    carryOver = (product - (product % 10)) / 10;
    newArr[idx] = product % 10;
    if (carryOver && idx === 0) {
      newArr.unshift(carryOver);
    }
    idx--;
  }
  return newArr;
};

const addArrays = (arr1, arr2) => {
  const newArr = [];
  let i = arr1.length - 1;
  let j = arr2.length - 1;
  let carryOver = 0;
//   console.log("adding", arr1, arr2);

  while (i >= 0 || j >= 0) {
    const val1 = i >= 0 ? arr1[i] : 0;
    const val2 = j >= 0 ? arr2[j] : 0;
    const sum = val1 + val2 + carryOver;
    carryOver = (sum - (sum % 10)) / 10;
    newArr.unshift(sum % 10);
    i--;
    j--;
  }
  if(carryOver){
    newArr.unshift(carryOver)
  }
  return newArr;
};

const multiplayArrays = (arr1, arr2) =>{
    let result = [0]

    for(let i = 0; i < arr2.length; i++){
        const prod = multiplyArrayByNum(arr1, arr2[i], arr2.length - 1 - i)
        result = addArrays(prod, result)
    }

    return result;
}


const getFactorialDigitSum = () => {
    let numArr = [1]

  for (let i = 2; i <= 100; i++) {
    const numArr2 = i
      .toString()
      .split("")
      .map((num) => parseInt(num));
    numArr = multiplayArrays(numArr, numArr2)
    
  }

  return numArr.reduce((a, b) => a + b, 0);
};
console.log(getFactorialDigitSum());
