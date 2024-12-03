const BILLION = 1000000000;
let MAX_SIDE = 333333333;

const getTriangles = () => {
  let sum = 0;

  for (let i = 2; i <= MAX_SIDE; i++) {
    const s1 = i + 1;
    const p1 = 2 * i + s1;
    const partialHeronArea = ((3 * i + 1) * (i - 1)) / 16;

    const s2 = i - 1;
    const p2 = 2 * i + s2;
    const partialHeronArea2 = ((3 * i - 1) * (i + 1)) / 16;

    const max = Math.ceil((Math.pow(3, 0.5) * (i + 1)) / 4);
    let j = max;

    while (Math.pow(j, 2) >= partialHeronArea) {
      squared = Math.pow(j, 2);
      if (i === 241) {
        console.log(
          "i",
          i,
          "squared",
          squared,
          "partialHeronArea",
          partialHeronArea,
          partialHeronArea * (i + 1) * (i + 1),
          partialHeronArea * (i - 1) * (i - 1),
          "partialHeronArea2",
          partialHeronArea2,

          partialHeronArea2 * (i + 1) * (i + 1),
          partialHeronArea2 * (i - 1) * (i - 1),
          "max",
          max
        );
      }
      if (i === 17) {
        console.log(
          "i",
          i,
          "squared",
          squared,
          "partialHeronArea",
          partialHeronArea,
          partialHeronArea * (i + 1) * (i + 1),
          partialHeronArea * (i - 1) * (i - 1),

          "partialHeronArea2",
          partialHeronArea2,
          partialHeronArea2 * (i + 1) * (i + 1),
          partialHeronArea2 * (i - 1) * (i - 1),
          "max",
          max
        );
      }
      if (squared === partialHeronArea) {
        if (p1 <= BILLION) {
          sum += p1;
          console.log("way 1", i, s1, p1, sum);
        }
      } else if (squared === partialHeronArea2) {
        if (p2 <= BILLION) {
          sum += p2;
          console.log("way 2", i, s2, p2, sum);
        }
      }
      j--;
    }
  }

  return sum;
};

console.log(getTriangles());
// getPrimes()
// console.log(getIsPerfectSquare(25))
// console.log(getIsPerfectSquare(225))
// console.log(getIsPerfectSquare(144))
// console.log(getIsPerfectSquare(145))
