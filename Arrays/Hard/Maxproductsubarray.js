///1

var maxProduct = function(nums) {

    let n = nums.length;
    let maxi = nums[0];
    let mini = nums[0];

    let res = nums[0];

    for(let i=1 ; i<n; i++){
        if(nums[i]<0){
            let temp = maxi
            maxi = mini
            mini = temp
        }
        maxi = Math.max(nums[i] , maxi*nums[i]);
        mini = Math.min(nums[i] , mini*nums[i]);

        res = Math.max(res, maxi);

    }

    return res;
    
};


///2

var maxProduct = function(nums) {
    
    let res = Math.max(...nums)
    let curMin = 1 , curMax=1
    
    for(let num of nums){
        if(num==0){
            curMin =1 
            curMax = 1
            continue
        } 
        let temp = num*curMax
        curMax = Math.max( num*curMax , num*curMin , num)
        curMin = Math.min(temp , num*curMin , num)
        res = Math.max(res ,curMax , curMin )
    }
    return res
    
};