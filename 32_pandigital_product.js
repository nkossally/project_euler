const getPandigitalProduts = () => {
    let sum = 0;
    const seen = new Set()
    const nums = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9])

    const copySet = set =>{
        return new Set(Array.from(set))
    }

    const getProductWorks = (numsLeft, num1, num2) =>{
        // console.log(numsLeft, num1, num2)
        const prod = num1 * num2
        const prodStr = prod.toString()
        if(prod.toString().length !== numsLeft.size){
            return false;
        }
        if(num1.toString().length + num2.toString().length + prodStr.length !== 9){
            return false
        }
        // console.log(num1, num2, prod, numsLeft)

        // console.log(num1, num2, prod, numsLeft)
        for(let i = 0; i < prodStr.length; i++){
            if(numsLeft.has(parseInt(prodStr[i]))){
                numsLeft.delete(parseInt(prodStr[i]))
            } else {
                return false;
            }
        }
        if(!seen.has(prod)){
            // console.log(num1, num2, prod)
            sum += prod
            seen.add(prod)
        }
    }

    const helper = (numsLeft, currStr, num1, num2) => {
        if(num1 && num2){
            getProductWorks(numsLeft, num1, num2)
            // return
        }
        if(!num1){
            if(currStr){
                helper(numsLeft, "", parseInt(currStr), num2 )
            }
        }
        if(num1 && !num2){
            if(currStr){
                helper(numsLeft, "", num1, parseInt(currStr) )
            }
        }
        numsLeft.forEach(num =>{
            const newSet = copySet(numsLeft)
            newSet.delete(num)
            helper(newSet, currStr + num, num1, num2)
        })

    }

    helper(nums, "", undefined, undefined)

    return sum

}

console.log(getPandigitalProduts(  ))