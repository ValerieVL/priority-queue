const Node = require('./node');

class MaxHeap {
    constructor() {
        this.root = null;
        this.parentNodes = [];
    }

    push(data, priority) {
        this.insertNode(new Node(data, priority));
        this.shiftNodeUp(new Node(data, priority));
    }

    pop() {

        if (this.root == null) return;

        this.detachRoot();
        this.restoreRootFromLastInsertedNode(this.detachRoot());
        this.shiftNodeDown(this.root);
        return this.root.data;

    }

    detachRoot() {
        let root;
        root = this.root;
        this.root = null;
        if (root.left == null || root.right == null) {
            this.parentNodes.shift()
        }
        return root;
    }

    restoreRootFromLastInsertedNode(detached) {

    }

    size() {

    }

    isEmpty() {
        if (this.root == null) {
            return true;
        }
        else return false;
    }

    clear() {
        this.root = null;
        this.parentNodes = [];
    }

    insertNode(node) {
        
    }


    shiftNodeUp(node) {

    }

    shiftNodeDown(node) {

    }
}

module.exports = MaxHeap;
