const MAX_CHAIN_SIZE = 3000;

const sumDivisors = (num) => {
  let sum = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) sum += i;
  }
  return sum;
};

const getChain = num => {
  const chain = [num];
  const seen = new Set([num]);
  let min = num;
  let curr = num
  let count = 0

  while (count < MAX_CHAIN_SIZE) {
    curr = sumDivisors(curr);

    if (curr === num) {
      return { min, chain };
    }
    if (curr > 1000000) return false;
    if (seen.has(curr)) return false;
    min = Math.min(min, curr);
    chain.push(curr);
    seen.add(curr);
    count++;
  }
};

const getLongestChain = () => {
  let bestChain;
  for (let i = 1; i < 300000; i++) {
    const currChain = getChain(i);
    if (currChain) {
      if (!bestChain || bestChain.chain.length < currChain.chain.length) {
        console.log(bestChain)
        bestChain = currChain;
      }
    }
  }
  console.log(bestChain);
  return bestChain ? bestChain.min : undefined;
};

console.log(getLongestChain())