/**
 * Returns the number of steps to reduce it to zero
 * @param {number} num
 * @return {number}
 */

// Using imperative method
// while loop
// const numberOfSteps = (num: number): number => {
//   let count = 0
//   while (num > 0) {
//     if (num % 2 == 0) {
//       num /= 2
//     } else {
//       num--
//     }
//     count++
//   }
//   return count
// }

//for loop
const numberOfSteps = (num: number): number => {
  let count = 0
  for (let i = num; i > 0;) {
    if (i % 2 == 0) {
      i /= 2
    } else {
      i--
    }
    count++
  }
  return count
}

// console.log(numberOfSteps(14));
// console.log(numberOfSteps(8));
// console.log(numberOfSteps(123));
