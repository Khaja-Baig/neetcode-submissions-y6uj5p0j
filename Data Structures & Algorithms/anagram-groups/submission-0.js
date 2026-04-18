class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let og = [];
        for (let i of strs) {
            og.push(i);
        }
        let anagrams = [];

        for (let i = 0; i < strs.length; i++) {
            let j = [...strs[i]].sort().join("");
            strs[i] = j;
        }

        let dup_og = [];
        for (let i of strs) {
            dup_og.push(i);
        }

        let i = 0;
        while (!strs.length == 0) {
            let temp = [];
            for (let j = i + 1; j < strs.length; j++) {
                if (strs[i] == strs[j]) {
                    temp.push(strs[j]);
                    strs.splice(j, 1);
                    j--;
                }
            }
            temp.push(strs[i]);
            strs.splice(i, 1);
            i--;
            i++;
            anagrams.push(temp);
        }

        for (let i of anagrams) {
            for (let j in i) {
                let ele = i[j];
                let indx = dup_og.indexOf(ele);
                let ele2 = og[indx];
                i[j] = ele2;
                dup_og.splice(indx, 1, " ");
            }
        }

        // console.log(anagrams);
        return anagrams;
    }
}
