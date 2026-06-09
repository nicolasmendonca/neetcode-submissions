class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const uniqueMap = {};

        for (let i = 0; i < nums.length; i++) {
            let currentNum = nums[i]
            let uniqueMapValue: undefined | true = uniqueMap[currentNum];

            if (uniqueMapValue === undefined) {
                uniqueMap[currentNum] = true;
            } else if (uniqueMapValue === true) {
                return true;
            }
        }

        return false;
    }
}
