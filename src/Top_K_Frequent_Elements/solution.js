/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// Using min heap
class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  extractMin() {
    if (this.isEmpty()) {
      return null;
    }

    const minValue = this.heap[0];
    const lastValue = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = lastValue;
      this.heapifyDown();
    }

    return minValue;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index].frequency < this.heap[parentIndex].frequency) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  heapifyDown() {
    let index = 0;

    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let smallestIndex = index;

      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex].frequency < this.heap[smallestIndex].frequency
      ) {
        smallestIndex = leftChildIndex;
      }

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex].frequency <
          this.heap[smallestIndex].frequency
      ) {
        smallestIndex = rightChildIndex;
      }

      if (smallestIndex !== index) {
        this.swap(index, smallestIndex);
        index = smallestIndex;
      } else {
        break;
      }
    }
  }

  swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }
}

const topKFrequent = (nums, k) => {
  const frequencyMap = new Map();

  // Count the frequency of each element
  for (const num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  // Create a min heap based on the frequency
  const minHeap = new MinHeap();
  for (const [num, frequency] of frequencyMap) {
    minHeap.insert({ num, frequency });

    // If the heap size exceeds k, remove the element with the smallest frequency
    if (minHeap.heap.length > k) {
      minHeap.extractMin();
    }
  }

  // Extract the top k frequent elements from the heap
  const result = [];
  while (!minHeap.isEmpty()) {
    result.unshift(minHeap.extractMin().num);
  }

  return result;
};

// console.log(topKFrequent(nums = [1,1,1,2,2,3], k = 2));
// console.log(topKFrequent(nums = [1], k = 1));
