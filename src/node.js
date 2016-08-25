class Node {
    constructor(data, priority) {
        this.data = data;
        this.priority = priority;
        this.parent = null;
        this.left = null;
        this.right = null;
    }

    appendChild(node) {
        node.parent = this;
        if (this.left !== null && this.right !== null) {
            return;
        }
        if (this.left !== null) {
            this.right = node;
            return;
        }
        this.left = node;
    }

    removeChild(node) {
        if (node == this.left) {
            this.left.parent = null;
            this.left = null;
        } else if (node == this.right) {
            this.right.parent = null;
            this.right = null;
        } else {
            throw 'Error';
        }
    }

    remove() {
        if (this.parent !== null) {
            this.parent.removeChild(this);
        }

    }

    swapWithParent() {
        if (this.parent != null) {
            let parent, child, parentOfParent, childOfLeft, childOfRight;
            parent = this.parent;
            child = this;
            parentOfParent = this.parent.parent;
            childOfLeft = child.left;
            childOfRight = child.right;
            if (child.left !== null) {
                child.left.parent = parent;
            }
            if (child.right !== null) {
                child.right.parent = parent;
            }
            if (parent.left == child && parent.right !== null) {
                parent.right.parent = child;
            }
            if (parent.right == child && parent.left !== null) {
                parent.left.parent = child;
            }
            if (parentOfParent !== null) {
                if (parentOfParent.left == parent) {
                    parentOfParent.left = child;
                }
                if (parentOfParent.right == parent) {
                    parentOfParent.right = child;
                }
            }
            parent.parent = child;
            if (parent.left == child) {
                child.right = parent.right;
                child.left = parent;
            }
            if (parent.right == child) {
                child.left = parent.left;
                child.right = parent;
            }
            child.parent = parentOfParent;
            parent.left = childOfLeft;
            parent.right = childOfRight;

        }

    }
}

module.exports = Node;
