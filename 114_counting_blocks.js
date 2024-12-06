const LENGTH = 50

const dp_ends_gray = [1, 1, 1]
const dp_ends_red = [0, 0, 1]

const countBlocks2 = () => {

    for(let i = 3; i < LENGTH; i++){
        // gray can be added to any previous sequence
        let ends_gray_count = dp_ends_gray[i - 1] + dp_ends_red[i - 1]
        // can extend the length of the last red block in a sequence that ends with red 
        let ends_red_count = dp_ends_red[i - 1]
        // add sequence that ends with a red block of length 3
        ends_red_count += dp_ends_gray[i - 3]

        dp_ends_gray.push(ends_gray_count)
        dp_ends_red.push(ends_red_count)
    }
    const result = dp_ends_gray[dp_ends_gray.length - 1] + dp_ends_red[dp_ends_red.length - 1]
    console.log(result)
    return result
}



const countBlocks = () => {
    let count = 0

    const helper = (lengthLeft, lastWasRed) =>{
        if(lengthLeft === 0){
            count++
            return
        }

        if(lengthLeft === LENGTH || lastWasRed){
            for(let i = 1; i <= lengthLeft; i++){
                helper(lengthLeft - i, false)
            }
        }
        if(lengthLeft === LENGTH || !lastWasRed) {

            for(let i = 3; i <= lengthLeft; i++){
                helper(lengthLeft - i, true)
            }
        }

    }

    helper(LENGTH, undefined)
    console.log(count)
}

countBlocks2()