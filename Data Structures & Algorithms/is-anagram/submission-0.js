class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let first = [...s].sort().join('')
        let second = [...t].sort().join('')
        if(first==second){
            return true
        }
        return false
    }
}
