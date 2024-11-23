const getIsPalindrome = (num) => {
  let i = 0;
  const numStr = num.toString();
  while (i < Math.floor(numStr.length / 2)) {
    if (numStr[i] !== numStr[numStr.length - 1 - i]) {
      return false;
    }
    i++;
  }
  return true;
};

const getPalindromicProduct = () => {
  let max = 1;

  for (let a = 1; a <= 9; a++) {
    for (let b = 0; b <= 9; b++) {
      for (let c = 0; c <= 9; c++) {
        for (let d = 1; d <= 9; d++) {
          for (let e = 0; e <= 9; e++) {
            for (let f = 0; f <= 9; f++) {

                const product = (100*a + 10*b + c) * (100*d + 10*e + f)
                if(getIsPalindrome(product)){
                    max = Math.max(max, product)
                }

            }
          }
        }
      }
    }
  }
  return max;
};
console.log(getPalindromicProduct())