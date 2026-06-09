class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        let maxSeenValue = arr[arr.length - 1];
        let newArray = [-1]
        for (let i = 0; i < arr.length - 1; i++) {
            let originalArrayPosition = arr.length - 1 - i;
            maxSeenValue = Math.max(maxSeenValue, arr[originalArrayPosition]);
            newArray.unshift(maxSeenValue)
        }

        return newArray;
    }
}
