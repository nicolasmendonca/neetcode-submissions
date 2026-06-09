class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let maxConsecutive = 0;
        let currentStreak = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 1) {
                currentStreak += 1;
                maxConsecutive = Math.max(maxConsecutive, currentStreak);
            } else {
                currentStreak = 0;
            }
        }
        return maxConsecutive;
    }
}
