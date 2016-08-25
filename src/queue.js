const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		this.maxSize = maxSize || 30;
		this.heap = new MaxHeap ();
	}

	push(data, priority) {

		this.heap.push(data,priority);

		if (data>=this.maxSize && priority>=this.maxSize) {
			throw("Queue has max size");
		}

	}

	shift() {
		if (this.isEmpty()) {
			 throw 'Error'; }
		this.heap.pop();
	}

	size() {
		return this.heap.size();
	}

	isEmpty() {
		return this.heap.isEmpty();

	}
}

module.exports = PriorityQueue;
