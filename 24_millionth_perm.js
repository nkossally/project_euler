const getMillionthPerm = () =>{
    const perms = []

    const nums = []
    for(let num = 0; num < 10; num++){
        nums.push(num.toString())

    }

    const helper = (strSoFar, numsLeft) => {
        if(perms.length > 999999) return
        if(numsLeft.length === 0){
            perms.push(strSoFar)
            return
        }
        for(let i = 0; i <  numsLeft.length; i++){
            helper(strSoFar + numsLeft[i], numsLeft.slice(0, i).concat(numsLeft.slice(i + 1)))
        }

    }

    helper("", nums)
    return perms[999999]
}

console.log(getMillionthPerm())