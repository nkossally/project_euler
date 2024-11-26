
const FAMILY_SIZE = 5

const PERFECT_CUBES = new Set()

const DELTA = .0001

const getIsCubeV3 = (num) =>{
    
    return PERFECT_CUBES.has(num)
}

const getIsCubeV2 = (num) =>{
    const root = Math.pow(num, 1/3)
    return Math.abs(root - Math.round(root)) < DELTA
}

const getIsCube = (num) =>{
    let divisor = 2;
    while(num > 1){
        while(num % divisor === 0){
            if(num % Math.pow(divisor, 3) !== 0){
                return false
            }
           num /=  Math.pow(divisor, 3)
        }
        divisor++
    }

    return true
}

const getCubePermutations = num =>{
    const family = new Set()

    const helper = (str, strLeft) =>{
        if(family.size  > FAMILY_SIZE) return;
        if( str[0] === "0") return
        if(strLeft.length === 0){
            const parsedNum = parseInt(str)


            if( getIsCubeV3(parsedNum)){
                family.add(parsedNum)
            }
        }
        for(let i = 0; i < strLeft.length; i++){
            helper(str + strLeft[i], strLeft.slice(0, i) + strLeft.slice(i + 1))
        }

    }
    helper("", num.toString())
    
    return family
}

const getSmallest = () =>{
    const arr = []
    for(let i = 2; i < 10000; i++){
        PERFECT_CUBES.add(Math.pow(i, 3))
    }
    // for(let i = 2; i < 10000; i++){
    for(let i = 5027; i < 10000; i++){

        const result = getCubePermutations(Math.pow(i, 3))
        console.log("i", i, result)
        if(result.size === FAMILY_SIZE){
           return result
        }
        // if(arr.length === 2) return arr
    }
}

// console.log(getSmallest())

console.log(getSmallest())