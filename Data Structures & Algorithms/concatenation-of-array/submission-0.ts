class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        let newArray: number[] = [];
        for (let i = 0; i < nums.length * 2; i++) {
            let cursor = i % nums.length;
            newArray[i] = nums[cursor];
        }

        return newArray;
    }
}
