class LinkedNode {
    public value: any;
    public next: LinkedNode | null;

    constructor(value: any) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    private head: LinkedNode | null;
    private tail: LinkedNode | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        let i = 0;
        let node = this.head;

        while (node && i < index) {
            node = node.next;
            i++;
        }

        if (i < index || !node) return -1;

        return node.value;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val: number): void {
        let newLinkedNode = new LinkedNode(val);

        if (this.head === null) {
            this.head = newLinkedNode;
            this.tail = newLinkedNode;
            return;
        }

        newLinkedNode.next = this.head;
        this.head = newLinkedNode;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val: number): void {
        let newLinkedNode = new LinkedNode(val);
        
        if (this.tail === null) {
            this.head = newLinkedNode;
            this.tail = newLinkedNode;
            return;
        }

        this.tail.next = newLinkedNode;
        this.tail = newLinkedNode
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index: number): boolean {
        if (this.head === null) {
            return false;
        }

        // Caso especial: remover el head
        if (index === 0) {
            this.head = this.head.next;

            // Si la lista quedó vacía, también hay que limpiar tail
            if (this.head === null) {
                this.tail = null;
            }

            return true;
        }

        let prev = this.head;
        let i = 0;

        // Queremos quedar parados en el nodo anterior al que vamos a borrar
        while (i < index - 1 && prev.next !== null) {
            prev = prev.next;
            i++;
        }

        const nodeToRemove = prev.next;

        // Si no existe el nodo en ese índice
        if (nodeToRemove === null) {
            return false;
        }

        // Si estamos borrando el tail, el nuevo tail pasa a ser prev
        if (nodeToRemove === this.tail) {
            this.tail = prev;
        }

        prev.next = nodeToRemove.next;

        return true;
    }

    /**
     * @return {number[]}
     */
    getValues(): number[] {
        let values: number[] = [];
        let node = this.head
        while (node != null) {
            values.push(node.value);
            node = node.next;
        }

        return values;
    }
}
