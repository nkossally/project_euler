const getIsprime = ( num) => {
  if (num === 1) return false;
  let i = 2;
  while (i <= Math.floor(num / 2)) {
    if (num % i === 0) return false;
    i++;
  }
  return true;
};

const getSetsOfPrimes = () => {
  const allSets = [];

  const helper = (primes, numsLeft, numStr) => {
    if (numsLeft.length === 0 && numStr.length === 0) {
      allSets.push(primes);
      return;
    }

    if (numStr) {
      const num = parseInt(numStr);
      if (getIsprime(num)) {
        helper([...primes, num], [...numsLeft], "");
      }
    }

    for (let i = 0; i < numsLeft.length; i++) {
      const newNumsLeft = numsLeft.slice(0, i).concat(numsLeft.slice(i + 1));
      helper(primes, newNumsLeft, numStr + numsLeft[i]);
    }
  };

  helper([], [1, 2, 3, 4, 5, 6, 7, 8, 9], "");

  console.log(allSets.length)
  return allSets.length;
};

getSetsOfPrimes();
