const getSpecialPythagoreanTriplet = () =>{
    let a = 1;
    let b = 2;
    const getC = (a, b) => Math.pow(a*a + b*b, .5)
    const getSum = (a, b) => a + b + getC(a, b)

    while(getSum(a, b) < 1001){
        while(getSum(a, b) < 1001){
            if(getSum(a, b) === 1000){
                console.log(a, b, getC(a, b))
                return a * b * getC(a, b)
            }
            b++;
        }
        a++
        b = a + 1;
    }

}

console.log(getSpecialPythagoreanTriplet())

// console.log(293 + 293 + Math.pow(293*293 + 293*293, .5))