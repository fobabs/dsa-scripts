/**
 * Returns the number of steps to reduce it to zero
 * @param {number} num
 * @return {number}
 */

// Using Imperative method (While loop)
const numberOfSteps = (num) => {
  let count = 0;
  while (num > 0) {
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num--;
    }
    count++;
    // OR
    // if ((num & 1) === 0) { // Using bitwise AND
    //   // If even, divide by two and add one step.
    //   num /= 2;
    // } else {
    //   // Else subtract from number and add another step
    //   --num;
    // }
    // ++count
  }
  return count;
};

// console.log(numberOfSteps(14));
// console.log(numberOfSteps(8));
// console.log(numberOfSteps(123));
