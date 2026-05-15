class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let numbers = {}
        for(let i = 0; i < nums.length; i++){
            if(!numbers[nums[i]]){
                numbers[nums[i]] = "single"
            }else if(nums[i] in numbers){
                numbers[nums[i]] = "double"
            }
        }
        for(let key in numbers){
            if(numbers[key] === "single"){
                return key
            }
        }
    }
}
