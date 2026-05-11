class Solution {
  
    hasDuplicate(nums) {
        let objNums ={}
        for(let i = 0; i < nums.length; i++){
            if(objNums[nums[i]]){
                return true
            }
            objNums[nums[i]] = true    
        }
        return false
    }
}

