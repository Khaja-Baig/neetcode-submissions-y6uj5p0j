class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums){
        let n = nums.length
        let ans = []
        let c = 0
        while(c<2){
            for(let i=0; i<n; i++){
            ans.push(nums[i])
            if(i==n-1){
                c++
            }
        }
        }
        return ans
    }
}
