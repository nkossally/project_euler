const getIsPandigital = numArr => {
    const lastNumsSet = new Set(numArr.slice(numArr.length - 9))
    const firstNumsSet = new Set(numArr.slice(0, 9))

    for(let i = 1; i <= 9; i++){
        if(!firstNumsSet.has(i)) return false
    };

    for(let i = 1; i <= 9; i++){
        if(!lastNumsSet.has(i)) return false
    };

    return true
}

const addArrays = (arr1, arr2) => {
    const result = []

    let idx1 = arr1.length - 1;
    let idx2 = arr2.length - 1;
    let remainder = 0

    while(idx1 >= 0 || idx2 >= 0){
        const val1 = idx1 >= 0 ? arr1[idx1] : 0;
        const val2 = idx2 >= 0 ? arr2[idx2] : 0;
        const sum = val1 + val2 + remainder
        remainder = (sum - sum % 10) / 10
        result.unshift( sum  % 10)
        idx1--
        idx2--
    }
    if(remainder) result.unshift(remainder)


    return result
}

const getPandigitalFib = () => {
    let val1 = [ 1 ];
    let val2 = [ 1 ];
    let k = 2;
    let temp


    while(true){
        temp = val1
        val1 = val2
        val2 = addArrays(temp , val2)
        k++
        if(k === 329468){
            console.log(k)
            console.log(getIsPandigital(val2))
            return k
        }
        // if(getIsPandigital(val2)) return k

    }
    return false

};

console.log(getPandigitalFib());
