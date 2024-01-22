/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
  }

  heapifyUp(index) {
    let parentIndex = this.getParentIndex(index);
    while (index > 0 && this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    }
  }

  heapifyDown(index) {
    let minChildIndex;
    while (true) {
      let leftChildIndex = this.getLeftChildIndex(index);
      let rightChildIndex = this.getRightChildIndex(index);
      minChildIndex = index;

      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[minChildIndex]) {
        minChildIndex = leftChildIndex;
      }

      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[minChildIndex]) {
        minChildIndex = rightChildIndex;
      }

      if (minChildIndex !== index) {
        this.swap(index, minChildIndex);
        index = minChildIndex;
      } else {
        break;
      }
    }
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  extractMin() {
    if (this.heap.length === 0) {
      return null;
    }

    const min = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown(0);
    return min;
  }

  peek() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }
}

const findKthLargest = (nums, k) => {
  const minHeap = new MinHeap();

  for (let i = 0; i < nums.length; i++) {
    minHeap.insert(nums[i]);
    if (minHeap.heap.length > k) {
      minHeap.extractMin();
    }
  }
  return minHeap.peek()
};

// console.log(findKthLargest(nums = [3,2,1,5,6,4], k = 2));
// console.log(findKthLargest(nums = [3,2,3,1,2,4,5,5,6], k = 4));
