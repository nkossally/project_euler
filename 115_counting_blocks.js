const RED_BLOCK_MIN_LENGTH = 50

const countBlocks2 = (n) => {
    const dp_ends_gray = []
    const dp_ends_red = []

    for(let i = 0; i < RED_BLOCK_MIN_LENGTH; i++){
        dp_ends_gray.push(1)
        dp_ends_red.push(0)
    }
    dp_ends_red[RED_BLOCK_MIN_LENGTH - 1] = 1



    for(let i = RED_BLOCK_MIN_LENGTH; i < n; i++){
        // gray can be added to any previous sequence
        let ends_gray_count = dp_ends_gray[i - 1] + dp_ends_red[i - 1]
        // can extend the length of the last red block in a sequence that ends with red 
        let ends_red_count = dp_ends_red[i - 1]
        // add sequence that ends with a red block of length  RED_BLOCK_MIN_LENGTH
        ends_red_count += dp_ends_gray[i - RED_BLOCK_MIN_LENGTH]

        dp_ends_gray.push(ends_gray_count)
        dp_ends_red.push(ends_red_count)
    }
    const result = dp_ends_gray[dp_ends_gray.length - 1] + dp_ends_red[dp_ends_red.length - 1]
    // console.log(n, result,dp_ends_red,dp_ends_gray)
    return result
}


const getLowestNumBlocks = () => {
    let n = RED_BLOCK_MIN_LENGTH;

    while(countBlocks2(n) <= 1000000){
        n++
    }

    console.log(n)
    return n
}

getLowestNumBlocks()
