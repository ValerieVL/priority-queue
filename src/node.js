class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {

	}

	removeChild(node) {
		this.left = null;

	}

	remove() {

	}

	swapWithParent() {
		
	}
}

module.exports = Node;
