const BILLION = 1000000000;
let MAX_SIDE = 333333333;

const getTriangles = () => {
  let sum = 0;

  for (let i = 2; i <= MAX_SIDE; i++) {
    const s1 = i + 1;
    const p1 = 2 * i + s1;
    const heronArea = ((3 * i + 1) * (i - 1) * (i + 1) * (i + 1)) / 16;

    const s2 = i - 1;
    const p2 = 2 * i + s2;
    const heronArea2 = ((3 * i - 1) * (i + 1) * (i - 1) * (i - 1)) / 16;

    const max1 = Math.ceil( Math.pow(heronArea, .5)) 
    const max2 = Math.ceil( Math.pow(heronArea2, .5)) 

    let j = Math.max(max1, max2);

    while (Math.pow(j, 2) >= Math.min(heronArea, heronArea2)) {
      squared = Math.pow(j, 2);

      if (squared === heronArea) {
        if (p1 <= BILLION) {
          sum += p1;
          console.log("way 1", i, s1, p1, sum);
        }
      } else if (squared === heronArea2) {
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
