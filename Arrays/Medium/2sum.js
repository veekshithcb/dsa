var twoSum = function(nums, target) {
    
    let storage = new Map()

    for(let i=0 ; i<nums.length; i++){

        if(storage.has(target-nums[i])){
            return [i , storage.get(target-nums[i])]
        }

        storage.set(nums[i] , i)

    }
};