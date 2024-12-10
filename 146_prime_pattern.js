const MAX = 150000000

const getIsPrime = num =>{
    let i = 2;
    while(i <= Math.pow(num, .5)){
        if(num % i === 0) return false
        i++
    }
    return true
}

const getIsValid = num => {
    if(!getIsPrime( num * num + 1 )) return false

    if(getIsPrime( num * num + 2 )) return false


    if(!getIsPrime( num * num + 3 )) return false

    for(let i = num * num + 4; i <= num * num + 6; i++){
        if(getIsPrime( i )) return false 
    }

    if(!getIsPrime( num * num + 7 )) return false

    if(getIsPrime( num * num + 8 )) return false

    if(!getIsPrime( num * num + 9 )) return false

    for(let i = num * num + 10; i <= num * num + 12; i++){
        if(getIsPrime( i )) return false 
    }

    if(!getIsPrime( num * num + 13 )) return false

    for(let i = num * num + 14; i <= num * num + 26; i++){
        if(getIsPrime( i )) return false 
    }

    if(!getIsPrime( num * num + 27 )) return false

    return true;

}

const getSum = () =>{
    let sum = 0

    for(let i = 1000000; i < MAX; i++){
        if(getIsValid(i)){
            sum += i
            console.log(i, sum)
        }
        // console.log(i)
    }
    console.log(sum)
    return sum
}

// console.log(getIsValid(10))

getSum()