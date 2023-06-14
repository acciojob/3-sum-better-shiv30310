function threeSum(num){
    let res = [];

    let temp = num
    while(temp > 0){
        if(temp%2 === 0){
            res.push(0)
        
        }else {
            res.push(1)
        }
        temp = parseInt(temp/2)
    }
    return res.reverse().join("")
}

module.exports = threeSum;
