class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        let bracketStack: string[] = [];
        let bracketPairs = {
            '[': ']',
            '(': ')',
            '{': '}'
        }

        for (const char of s) {
            
            // bracket is opening
            if (char in bracketPairs) {
                bracketStack.push(char);
                continue;
            }

            // bracket is closing
            const lastOpenedBracket = bracketStack.at(-1);
            const previousBracketExists = !!lastOpenedBracket;
            const currentCharClosesLastOpenedBracket = bracketPairs[lastOpenedBracket] === char
            if (previousBracketExists && currentCharClosesLastOpenedBracket) {
                bracketStack.pop();
                continue;
            }

            // valid conditions were not met
            return false;
        }

        return bracketStack.length === 0;
    }
}
