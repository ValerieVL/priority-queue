const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {

	}

	pop() {
		this.detachRoot();

	}

	detachRoot() {
		this.root = null;

		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {

	}

	clear() {
		this.root = null;
		this.parentNodes = [];
	}

	insertNode(node) {
		if (this.heap = " ") this.root = node;


	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {

	}
}

module.exports = MaxHeap;
