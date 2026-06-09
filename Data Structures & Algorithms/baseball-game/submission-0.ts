class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        let stack: number[] = [];

        for (let i = 0; i < operations.length; i++) {
            const currentOperation = operations[i]
            switch (currentOperation) {
                case '+':
                    let components = [stack.at(-1), stack.at(-2)]
                    stack.push(components[0] + components[1])
                    continue;

                case 'D':
                    stack.push(stack.at(-1) * 2)
                    continue;

                case 'C':
                    stack.pop();
                    continue;

                default:
                    let score = Number.parseInt(currentOperation);
                    
                    if (Number.isNaN(score)) {
                        throw new Error('Failed to parse score')
                    }

                    stack.push(score);
                    
                    continue;
            } 
        }

        return stack.reduce((prev, curr) => prev + curr, 0)
    }
}
