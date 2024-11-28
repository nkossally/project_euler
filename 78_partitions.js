const countPartitions = (num) => {
  let count = 0;

  const helper = (numLeft, groupSize) => {
    if (numLeft === 0) {
      count++;
      return;
    }
    if (groupSize > numLeft) return;
    const max = Math.floor(numLeft / groupSize);
    for (let i = 0; i <= max; i++) {
      helper(numLeft - i * groupSize, groupSize + 1);
    }
  };

  helper(num, 1);
  return count;
};

const getPartitionsV2 = (num) => {
  let count = 0;
  const seen = new Set()

  const helper = (arr) => {
    const str = JSON.stringify(arr)
    if(seen.has(str)) return
    console.log(arr)

    seen.add(str)
    count++;

    if (count > 400) return;


    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 1) {

        if(i === arr.length - 1 || arr[i] - 1 >= arr[i + 1] ){
            const copy = [...arr];
            copy[i]--;
            copy.push(1);
            helper(copy);
        }


        if (i < arr.length - 1) {
          const val1 = arr[i];
          const val2 = arr[i + 1];
          if (val2 + 1 <= val1 - 1) {
            const copy = [...arr];
            copy[i]--;
            copy[i + 1]++;
            helper(copy);
          }
        }
      }
    }

  };

  helper([num]);

  return count;
};

const getNumWithMillionsPartitions = () => {
  let num = 1;
  let count = 2;
  const dp = [1];
  // while(countPartitions(num) % 1000000 !== 0){
  while (count < 90) {
    dp[num] = countPartitions(num);
    count++;
    num++;
  }
  console.log(dp);
  return num;
};

const versionTwo = () => {
  //dp[i][j] is the count of partitions of i with j as the largest group size
  const dp = [[0], [0, 1]];

  let num = 2;

  while (num < 10) {
    //Count partions of
    let count = 0;

    for (let i = 0; i <= num; i++) {
      if (i === 0) {
        dp.push([0]);
      } else if (i === num) {
        dp[num][num] = 1;
        count += 1;
      } else if (i === 1) {
        dp[num][1] = 1;
      } else {
        dp[num][i] = dp[num - i][i] !== undefined ? dp[num - i][i] : 0;
        dp[num][i] += dp[num - i][i - 1] !== undefined ? dp[num - i][i - 1] : 0;

        count += dp[num][i];
      }
    }
    console.log(num, count);
    num++;
  }

  console.log(dp);
  return dp.length;
};

const getPartitionsV3 = num =>{
  let count = 0;
  // dp[i][j] is number of partitions of i with maximum of j objects in one part of partition
  const dp = [[0]]

  for(let i = 1; i <= num; i++ ){
    dp.push([0])
    let count = 0;
    for(let j = 1; j < i; j++){
      console.log(i, j, dp)
      const val = dp[i - 1][j] + dp[j][j]
      dp[i][j] = val
      count += val

    }
    dp[i][i] = dp[i][i - 1] + 1
  }
  return dp
}

// console.log(versionTwo())
// console.log(getNumWithMillionsPartitions())
// console.log(getPartitionsV3(5));
// console.log(getPartitionsV3(1));
console.log(getPartitionsV3(10));
