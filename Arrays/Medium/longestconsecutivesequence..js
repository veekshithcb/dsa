var longestConsecutive = function(nums) {
    let longestStreak = 0
    let ds = new Set()
    for(let i=0 ; i<nums.length ; i++){
        ds.add(nums[i])
        
    }
    
    for(let num of nums){
        if(!ds.has(num-1)){
             let curNum = num
             let curStreak =1
             
             while(ds.has(curNum+1)){
                 curNum+=1
                 curStreak+=1
             }
            
            longestStreak = Math.max(longestStreak ,curStreak )
        }
    }
    
    return longestStreak
    
};