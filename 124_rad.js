const getRad = num =>{
    let prod = 1;
    let curr = num;
    let factor = 2;
    while(curr > 1){
        if(curr % factor === 0){
            prod *= factor
            while(curr % factor === 0){
                curr /= factor
            }
        }
        factor += 1

    }
    return prod;
}

const sortFn = (a, b) =>{
    if(a[1] !== b[1]) return a[1] - b[1]
    return a[0] - b[0]
}

const getThousandthRad = () => {
    const rads= []

    for(let i = 1; i <= 100000; i++ ){
        rads.push([i, getRad(i)])
    }

    rads.sort(sortFn)

    console.log(rads[9999])
    return rads[9999]
}

getThousandthRad()