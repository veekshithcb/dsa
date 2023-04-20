var fourSum = function(nums, target) {
    let res = []
    
    
    
    if(nums==null || nums.length==0){
        return res
    }
    let n = nums.length
    
    nums.sort((a,b) => a-b)
    
    for(let i=0; i<n ; i++){
        for(let j=i+1 ; j<n ; j++){
            
            let target_2 = target- nums[j] - nums[i]
            let front = j+1
            let back = n-1
            
            while(front<back){
                let two_sum = nums[front] + nums[back]
                
                if(two_sum <target_2){
                     front++
                }else if(two_sum >target_2){
                    back--
                }else{
                    
                    var quad = []
                    
                    quad[0] = nums[i]
                    quad[1]  = nums[j]
                    quad[2] = nums[front];
                    quad[3] = nums[back]
                    res.push(quad)
                    
                    while(front<back && nums[front] ==quad[2]) ++front
                    while(front<back && nums[back] ==quad[3]) --back
                }
                
             
            }
            while(j+1<n &&nums[j+1]== nums[j]) ++j
        }
        while(i+1<n &&nums[i+1]== nums[i]) ++i
    }
    return res
    
};