class MinStack {
    private stack: number[];
    private minValStack: number[];

    constructor() {
        this.stack = [];
        this.minValStack = [];
    }

    get currentMinVal() {
        return this.minValStack.at(-1) ?? Infinity
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val);
        
        if (val <= this.currentMinVal) {
            this.minValStack.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        let removedElement = this.stack.pop();

        if (removedElement <= this.currentMinVal) {
            this.minValStack.pop();
        }
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack.at(-1);
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.currentMinVal;
    }
}
