const MAX_DENOM = 1000000;
const MIN_X = 219780;

// 1/n = 1/y + 1/x

const getCountForN = (n) => {
    let count = 0;
  for (let x = 2; x <= 2*n; x++) {
    const y = (n * x) / (x - n) 
    if( y > 0 && Math.floor(y) === y){
        count++
    }
    
  }
  return count;
};


const getFirstNThatHasOver1000Sums = () =>{
    let n = 2
    while(true){
        if(getCountForN(n) >= 1000) return n
        n++
    }
}
console.log(getFirstNThatHasOver1000Sums());
