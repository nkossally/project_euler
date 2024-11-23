const getLatticePathCount = () =>{
    let count = 0

    const helper = (x, y) =>{
        if(x === 20 && y === 20){
            count++
            return
        }
        if(x < 20){
            helper(x + 1, y)
        }
        if(y < 20){
            helper(x, y + 1)
        }
    }
    helper(0, 0)
    return count
}
console.log(getLatticePathCount())