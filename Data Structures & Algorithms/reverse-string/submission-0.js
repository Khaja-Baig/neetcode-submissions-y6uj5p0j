class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let n = s.length
        let p1 = 0
        let p2 = s.length - 1
        if(n/2==0){
            while(p1<(n/2)){
            [s[p1],s[p2]] = [s[p2],s[p1]]

            p1++
            p2--
            }
        }
        else{
            while(p1!=Math.floor(n/2)){
            [s[p1],s[p2]] = [s[p2],s[p1]]

            p1++
            p2--
            }
        }
        // console.log(s)
        
    }
}
