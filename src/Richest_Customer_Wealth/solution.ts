/**
 * Returns the wealth that the richest customer has
 * @param {number[][]} accounts
 * @returns {number} - Returns a number
 */

// Imperative method (for loop)
// const maximumWealth = (accounts: number[][]): number => {
//   let richestCustomer = 0
//   for (let i = 0; i < accounts.length; i++) {
//     let sum = 0
//     for (let j = 0; j < accounts[i].length; j++) {
//       sum += accounts[i][j]
//     }
//     richestCustomer = Math.max(sum, richestCustomer)
//   }
//   return richestCustomer
// }

// Declarative method (map and reduce)
const maximumWealth = (accounts: number[][]): number => {
  return Math.max(...accounts.map(account => (
    account.reduce((prev, curr) => prev + curr, 0)
  )))
}

// console.log(
//   maximumWealth([
//     [1, 2, 3],
//     [3, 2, 1],
//   ])
// )
// console.log(
//   maximumWealth([
//     [1, 5],
//     [7, 3],
//     [3, 5],
//   ])
// )
// console.log(
//   maximumWealth([
//     [2, 8, 7],
//     [7, 1, 3],
//     [1, 9, 5],
//   ])
// )
