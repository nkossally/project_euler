const TURNS = 15
const getPayout = () => {
    let totalProbability = 0;
    const half = Math.floor(TURNS/ 2) + 1;

    const helper = (turn, probability, count) =>{
        if(turn === TURNS + 1){
            if(count >= half ){
                totalProbability += probability;

            }
            return
        }
        helper(turn + 1, probability * (1 / (turn + 1)), count + 1)
        helper(turn + 1, probability * (turn / (turn + 1)), count)

    }

    helper(1, 1, 0)

    console.log(1/totalProbability)
    return Math.floor(1/totalProbability)

}

console.log(getPayout())