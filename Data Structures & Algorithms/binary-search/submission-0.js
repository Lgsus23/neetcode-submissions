class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let targetIndex = 0
        for(let i = 0; i <= nums.length; i++){
            if(target === nums[i]){
                targetIndex = i
            }
        }
        if(target === nums[targetIndex]){
            return targetIndex
        }return -1
    }
}
