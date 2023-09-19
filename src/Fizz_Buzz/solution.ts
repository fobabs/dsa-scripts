/**
 * Returns an array of string
 * @param {number} n
 * @return {string[]}
 */

const fizzBuzz = (n: number): string[] => {
  let result: string[] = []
  for (let i = 1; i < n + 1; i++) {
    if (i % 15 == 0) {
      result.push("FizzBuzz")
    } else if (i % 3 == 0) {
      result.push("Fizz")
    } else if (i % 5 == 0) {
      result.push("Buzz")
    } else {
      result.push(String(i))
    }
  }
  return result
}

// console.log(fizzBuzz(3))
// console.log(fizzBuzz(5))
// console.log(fizzBuzz(15))
