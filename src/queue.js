const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		this.maxSize = maxSize || 30;
		this.heap = new MaxHeap ();
	}

	push(data, priority) {
		this.heap.push(0, 1);


	}

	shift() {
		this.heap.pop();
		
	}

	size() {

	}

	isEmpty() {

	}
}

module.exports = PriorityQueue;
