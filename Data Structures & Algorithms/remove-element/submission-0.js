class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let arr = nums
        for(let i=0; i<nums.length; i++){
            if(nums[i]==val){
                arr.splice(i,1)
                i--
            }
        }
        return arr.length
    }
}
