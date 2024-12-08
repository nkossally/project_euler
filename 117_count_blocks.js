const LENGTH = 50


const countBlocks2 = () => {

    const dp_ends_gray = [1, 1, 2, 4]
    const dep_ends_in_red = [0, 1, 1, 2]
    const dep_ends_in_green = [0, 0, 1, 1]
    const dep_ends_in_blue = [0, 0, 0, 1]


    for(let i = 4; i < LENGTH; i++){
        // gray can be added to any previous sequence
        let ends_gray_count = dp_ends_gray[i - 1] + dep_ends_in_red[i - 1] + dep_ends_in_green[i - 1] + dep_ends_in_blue[i - 1]
        let ends_red_count = dp_ends_gray[i - 2] + dep_ends_in_red[i -  2] + dep_ends_in_green[i - 2] + dep_ends_in_blue[i - 2]
        let ends_green_count = dp_ends_gray[i - 3] + dep_ends_in_red[i - 3] + dep_ends_in_green[i - 3] + dep_ends_in_blue[i - 3]
        let ends_blue_count = dp_ends_gray[i - 4] + dep_ends_in_red[i - 4] + dep_ends_in_green[i - 4] + dep_ends_in_blue[i - 4]


        dp_ends_gray.push(ends_gray_count)
        dep_ends_in_red.push(ends_red_count)
        dep_ends_in_green.push(ends_green_count)
        dep_ends_in_blue.push(ends_blue_count)

    }
    const result = dp_ends_gray[LENGTH- 1] +  dep_ends_in_red[LENGTH - 1] + dep_ends_in_green[LENGTH - 1] +  dep_ends_in_blue[LENGTH - 1]
    console.log(result)
    return result
}

countBlocks2()