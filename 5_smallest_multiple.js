const getSmallestMultiple = () =>{
    let num = 20;
    while(true){
        let divisor = 2;
        while(divisor < 20){
            if(num % divisor !== 0){
                break
            }
            divisor++
        }
        if(divisor === 20) return num
        num += 20;
    }
}

console.log(getSmallestMultiple())