const MAX_ROW = 100
const getNotDivisibleBysevenCount = () => {
  let count = 1;
  let lastRow = [1];
  const triangle = [[1]]

  for (let i = 2; i <= MAX_ROW; i++) {
    const newRow = [ 1 ]
    for(let j = 1; j < lastRow.length; j++){
        const sum = (lastRow[j - 1] + lastRow[j] )% 7
        newRow.push(sum)
        if(sum % 7 !== 0) count++
    }
    newRow.push(1)
    triangle.push(newRow)
    count += 2
    lastRow = newRow
  }

  console.log(triangle)
  return count;
};

console.log(getNotDivisibleBysevenCount())
