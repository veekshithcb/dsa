var rob = function(nums) {
    
    let n = nums.length
    let prev = nums[0]
    let prev2 = 0
    
    for(let i=1 ; i<n ; i++){
        let take = nums[i]
        if(i>1) take+=prev2
        let nonTake = 0 + prev
        
        let curi = Math.max(take , nonTake)
        
         prev2 = prev
        prev = curi
    }
    return prev
}


var rob = function(nums) {
    
    let n = nums.length
    let dp = Array(n).fill(-1)
    return f(n-1 , nums , dp)
    
};


let f = (ind , nums,dp) =>{
    if(ind==0)return nums[ind]
    if(ind<0)return 0
    if(dp[ind]!=-1) return dp[ind]
    
    
    
    let pick = nums[ind] + f(ind-2 , nums, dp)
    let nonPick = 0 + f(ind-1 , nums, dp)
    
    return  dp[ind] = Math.max(nonPick , pick)
    
}