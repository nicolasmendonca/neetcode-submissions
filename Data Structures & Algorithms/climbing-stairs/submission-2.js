let cache = {}

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        // return if cached
        if (n in cache) {
            return cache[n]
        }

        // base cases
        if (n <= 2) return n;

        let branchA = this.climbStairs(n - 1)
        cache[n - 1] = branchA
        let branchB = this.climbStairs(n - 2)
        cache[n - 2] = branchB

        return branchA + branchB
    }
}
