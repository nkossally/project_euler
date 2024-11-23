const getSum = () =>{
    let num1 = 1;
    let num2 = 2;
    let sum = 2;
    

    while(num1 + num2 < 4000000 ){
        const num3 = num1 + num2;
        if(num3 % 2 === 0){
            sum += num3
        }
        num1 = num2
        num2 = num3
    }
    return sum

}

console.log(getSum())