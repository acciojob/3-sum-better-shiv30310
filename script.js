function threeSum(arr, target) {
	
    let res = []
    for(let i=0; i<=arr.length-3; i++){
        let temp = arr[i]
        res.push(arr[i])
        for(let j=i+1,t=0; t<2; t++){
            temp += arr[j]
            res.push(arr[j])
            j++
        }
        if(temp <= target){
            return res
        }else{
            res = []
        }
    }
  
}


module.exports = threeSum;
