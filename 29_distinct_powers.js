const getDistinct = () =>{

    const nums = new Set()

    for(let a = 2; a <= 100; a++){
        for(let b = 2; b <= 100; b++){
            nums.add(Math.pow(a, b))
        }
     
    }

    return nums.size

}

console.log(getDistinct())