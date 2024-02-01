/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// Using min heap
class MinHeap<T> {
  heap: T[]

  constructor() {
    this.heap = []
  }

  insert(value: T): void {
    this.heap.push(value)
    this.heapifyUp()
  }

  extractMin(): T | null {
    if (this.isEmpty()) {
      return null
    }

    const minValue = this.heap[0]
    const lastValue = this.heap.pop() as T

    if (this.heap.length > 0) {
      this.heap[0] = lastValue
      this.heapifyDown()
    }

    return minValue
  }

  isEmpty(): boolean {
    return this.heap.length === 0
  }

  private heapifyUp(): void {
    let index = this.heap.length - 1

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2)
      if (this.compare(this.heap[index], this.heap[parentIndex]) < 0) {
        this.swap(index, parentIndex)
        index = parentIndex
      } else {
        break
      }
    }
  }

  private heapifyDown(): void {
    let index = 0

    while (true) {
      const leftChildIndex = 2 * index + 1
      const rightChildIndex = 2 * index + 2
      let smallestIndex = index

      if (leftChildIndex < this.heap.length && 
        this.compare(this.heap[leftChildIndex], this.heap[smallestIndex]) < 0) {
        smallestIndex = leftChildIndex
      }

      if (rightChildIndex < this.heap.length &&
        this.compare(this.heap[rightChildIndex], this.heap[smallestIndex]) < 0) {
          smallestIndex = rightChildIndex
      }

      if (smallestIndex !== index) {
        this.swap(index, smallestIndex)
        index = smallestIndex
      } else {
        break
      }
    }
  }

  swap(i: number, j: number): void {
    const temp = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = temp
  }

  private compare(a: T, b: T): number {
    // Customize the comparison logic based on your data structure
    // For this problem, we are assuming that the elements have a 'frequency' property
    return (a as any).frequency - (b as any).frequency
  }
}

const topKFrequent = (nums: number[], k: number): number[] => {
  const frequencyMap = new Map<number, number>()

  // Count the frequency of each element
  for (const num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1)
  }

  // Create a min heap based on the frequency
  const minHeap = new MinHeap<{ num: number; frequency: number }>()
  for (const [num, frequency] of frequencyMap) {
    minHeap.insert({ num, frequency })

    // If the heap size exceed sk, remove the element with the smallest frequency
    if (minHeap.heap.length > k) {
      minHeap.extractMin()
    }
  }

  // Extract the top k frequent elements from the heap
  const result: number[] = []
  while (!minHeap.isEmpty()) {
    result.unshift(minHeap.extractMin()!.num)
  }

  return result
}

// console.log(topKFrequent([1,1,1,2,2,3], 2))
// console.log(topKFrequent([1], 1))
