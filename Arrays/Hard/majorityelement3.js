var majorityElement = function(nums) {
    let number1 = -Infinity , number2 = -Infinity , count1 = 0 , count2 = 0 , len = nums.length
    for(let i=0 ; i<len ; i++){
        if(nums[i]==number1){
            count1++
        }
        else if(nums[i]==number2){
            count2++
        }
        else if(count1==0){
            number1 = nums[i]
            count1 = 1
        }
        else if(count2==0){
            number2 = nums[i]
            count2 = 1
        }else{
            count1--
            count2--
        }
    }
      count1 = 0 , count2 = 0
    let ans = []
    for(let i=0; i<len ; i++){
        if(nums[i]==number1){
            count1++
        }
        if(nums[i]==number2){
            count2++
        }
    }
    if(count1>len/3) ans.push(number1)
    if(count2>len/3) ans.push(number2)
    
    console.log(count1)
    console.log(count2)
    return ans
};