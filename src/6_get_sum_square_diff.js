const getDiff = () => {
    let val1 = 0;
    let val2 = 0;
    for(let i = 1; i <= 100; i++){
        val1 += i;
        val2 += Math.pow(i, 2)

    }

    return Math.pow(val1, 2) - val2



}
console.log(getDiff())