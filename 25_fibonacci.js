const getHasThousandDigits = (num) =>{
    return num.toString().length === 1000
}

const getFib = () =>{
    let val1 = 1;
    let val2 = 1
    let idx = 1;


    while(!getHasThousandDigits(val1 + val2)){
        const temp = val1 + val2;
        val1 = val2;
        val2 = temp 
        idx++
    }

    return idx

}

console.log(getFib())