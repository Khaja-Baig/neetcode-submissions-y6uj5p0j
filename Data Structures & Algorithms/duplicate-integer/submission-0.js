class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let n = nums.length
        let flag = false
        let sett = new Set(nums)
        let n2 = sett.size
        
        if(n2!=n){
            flag = true
        }
        
        return flag

    }
}
