const LENGTH = 50


const countBlocks2 = (blockLength) => {

    const dp_ends_gray = []
    const dep_ends_in_other = []

    for(let i = 0; i < blockLength; i++){
        dp_ends_gray.push(1)
        dep_ends_in_other.push(0)
    }
    dep_ends_in_other[blockLength - 1] = 1

    for(let i = blockLength; i < LENGTH; i++){
        // gray can be added to any previous sequence
        let ends_gray_count = dp_ends_gray[i - 1] + dep_ends_in_other[i - 1]

        // add sequence that ends with other colored block
        let ends_other_color_count =  dep_ends_in_other[i - blockLength] + dp_ends_gray[i - blockLength]

        dp_ends_gray.push(ends_gray_count)
        dep_ends_in_other.push(ends_other_color_count)
    }
    const result = dp_ends_gray[dp_ends_gray.length - 1] + dep_ends_in_other[dep_ends_in_other.length - 1]
    console.log(result)
    return result
}

console.log(countBlocks2(2) + countBlocks2(3) + countBlocks2(4) - 3)