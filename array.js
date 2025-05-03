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
myArray.push(60);
//2.
myArray.pop();
//3.
myArray.unshift(5);
//4.
myArray.shift();
//5.
let index = myArray.indexOf(30);
//6.
if (index !== -1) {
    myArray.splice(index, 1);
}
//7.
let exists = myArray.includes(40);
//8.
myArray.reverse();
//9.
myArray.sort((a, b) => a - b);
//10.
let squaredArray = myArray.map(num => num * num);
//11.
let filteredArray = myArray.filter(num => num > 20);
//12.
let sum = myArray.reduce((acc, num) => acc + num, 0);

// Log the results
console.log("Original Array:", myArray);
console.log("Squared Array:", squaredArray);
console.log("Filtered Array:", filteredArray);
console.log("Sum of Elements:", sum);