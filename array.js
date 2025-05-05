// Create an array
let myArray = [10, 20, 30, 40, 50];

// Perform several operations on the array
// 1. Add an element to the end of the array
// 2. Remove the last element from the array
// 3. Add an element to the beginning of the array
// 4. Remove the first element from the array
// 5. Find the index of a specific element
// 6. Remove an element by index
// 7. Check if an element exists in the array
// 8. Reverse the array
// 9. Sort the array in ascending order
// 10. Map over the array to create a new array
// 11. Filter the array for elements greater than 20
// 12. Reduce the array to calculate the sum of its elements

//1.
// myArray.push(60);
// console.log("After push:", myArray);
// //2.
// myArray.pop();
// console.log("After pop:", myArray);
// //3.
// myArray.unshift(5);
// console.log("After unshift:", myArray);
//4.
myArray.shift(5);
console.log("After shift:", myArray);
//5.
let index = myArray.indexOf(30);
console.log("Index of 30:", index);
//6.
if (index !== -1) {
    myArray.splice(index, 1);
}
console.log("After splice:", myArray);
//7.
let exists = myArray.includes(40);
console.log("Does 40 exist in the array?", exists);
//8.
myArray.reverse();
console.log("After reverse:", myArray);
//9.
myArray.sort((a, b) => a - b);
console.log("After sort:", myArray);
//10.
let squaredArray = myArray.map(num => num * num);
console.log("Squared Array:", squaredArray);
//11.
let filteredArray = myArray.filter(num => num > 20);
console.log("Filtered Array:", filteredArray);
//12.
let sum = myArray.reduce((acc, num) => acc + num, 0);
console.log("Sum of elements:", sum);

// Log the results
console.log("Original Array:", myArray);
console.log("Squared Array:", squaredArray);
console.log("Filtered Array:", filteredArray);
console.log("Sum of Elements:", sum);