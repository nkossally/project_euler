const getWays = () =>{
    let count = 0

    const coinVals = [1, 2, 5, 10, 20, 50, 100, 200]

    const helper = (idx, sum) =>{
        if(sum === 200){
            count++
            return
        }
        if(idx === coinVals.length) return

        const maxNumCoins = Math.floor((200 - sum)/coinVals[idx])

        for(let i = 0; i <= maxNumCoins; i++){
            helper(idx + 1, sum + i * coinVals[idx])
        }
    }
    helper(0, 0)
    return count
}

console.log(getWays())