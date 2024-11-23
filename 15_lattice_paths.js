const getLatticePathCount = () =>{
    const dp = []

    for(let i = 0; i <= 20; i++){
        dp.push([])
        for(let j = 0; j <= 20; j++){
            if(i === 0 && j === 0){
                dp[i][j] = 0
            } else if(i === 0){
                dp[0][j] = 1;
            } else if(j === 0) {
                dp[i][0] = 1
            } else {
                dp[i][j] = dp[i -1][j] + dp[i][j - 1]
            }

        }
    }
    console.log(dp)

    return dp[20][20]
}
console.log(getLatticePathCount())