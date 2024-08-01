// Time Complexity Notes:

// O(n) understanding
// The number of operations performed is directly proportional to n.
// The graph is linear, similar to y = x.

// function linearLoop(n) {
//   for (let i = 0; i < n; i++) {
//     console.log(i);
//   }
// }

// linearLoop(11);

// O(n^2) understanding
// The number of operations performed is proportional to the square of n.
// The graph resembles a parabola, similar to y = x^2.

// function quadraticLoop(n) {
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       console.log(i, j);
//     }
//   }
// }

// quadraticLoop(10);

// O(n) is more efficient than O(n^2)

// O(1) understanding
// The number of operations performed is constant, regardless of the input size.
// The graph is similar to y = 0.

// function example(n) {
//   return n + n;
// }

// console.log(example(6));

// O(logn) understanding
// The logarithm in O(logn) typically has a base of 2.
// Every time n increases, the time or space increases by a factor of log2(n).
// The graph is similar to the graph of log(n).

// function logarithmicExample(n) {
//   let i = n;
//   while (i > 1) {
//     console.log(i);
//     i = Math.floor(i / 2);
//   }
// }

// console.log(logarithmicExample(8));

// Space Complexity

// O(1) understanding
// Since the memory only holds one variable and no new variable is created,
// the complexity is O(1).

// function beginnerExample(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }

// beginnerExample([10, 20, 30, 40, 50]);

// O(n) understanding
// The size of the array depends on the number of inputs,
// so the complexity is O(n).

// function example1(n) {
//   let arr = [];
//   for (let i = 0; i < n; i++) {
//     arr.push(i);
//   }
//   return arr;
// }

// console.log(example1(10));

// O(logn) understanding
// Here, the base of the logarithm is 2.
// For an input size of 16, the number of operations is 4,
// therefore the complexity is O(logn).

// function linearthmicExample(n) {
//   let res = [];
//   for (let i = 1; i < n; i *= 2) {
//     res.push(i);
//   }
//   return res;
// }

// console.log(linearthmicExample(16));

// Complexity of Arrays and Objects

// let myObj = {
//     name : 'Abhishek',
//     age : 21,
//     city : 'Mumbai',
// }

// Lets find what are the complexities for some operations
// Insterion :- Since its easy and its constant thereby the complexity is O(1)
// Deletion :- this is also constant operation thereby complexity is O(1)
// Accessor :- This is also constant operation theryby complexity is O(1)
// Searching :- In this we have to iterate and find thereby its complexity is O(n) we have to iterate until we find the Element

// Lets find what are the complexities for some methods

// Object.Key :- Since to list all the keys of an Object we have to iterate thereby the complexity is O(n)
// Object.values :- Since to list all the values of an Object we have to iterate thereby the complexity is O(n)
// Object.entries :- Since to list all the entries of an Object we have to iterate thereby the complexity is O(n)
// hasOwnProperty :- Since if we have to check if the property exist thereby the complexity is O(1)

// arr2 = [10, 14, 20, 12];

// arr.push() :- Since to push any element its a constant operation thereby the complexity is O(1)
// arr.pop() :-  Since to poput the element its a constant operation thereby the complexity is O(1)
// arr.unshift() :- Since in this method it shifts and thereby we have to change index of every element therefore the complexity is O(n)
// arr.shift() :- Same the indexing changes therefore the complexity is O(n)
// Searching :- There are 2 cases if we have to find value then complexity is O(n) and if we have to find index its a simple operation thereby O(1)

// Array travesring

// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// Case 1 :- If we have to find one specific number :-

// let arr = [1, 2, 3, 4, 5];
// targetNumber = 6;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === targetNumber) {
//     console.log("Target number found at : ", i);
//     break;
//   }

//   if (arr[i] != targetNumber) {
//     console.log("Target number not found in the array");
//   }
// }

// Array Inserting :-

// 1st Method

// let arr = [1, 2, 3, 4, 5];

// function insertElement(arr, index, element) {
//   arr.splice(index, 0, element);
//   return arr;
// }

// console.log(insertElement(arr, 5, 6));

// 2nd method

// let arr = [1, 2, 3, 4, 5];

// function insertElement(arr, index, element) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i === index) {
//       newArr.push(element);
//     }
//     newArr.push(arr[i]);
//   }
//   return newArr;
// }

// console.log(insertElement(arr, 2, 10));

// Array deletion

// 1st method

// let arr = [1, 2, 3, 4, 5];

// function deleteElement(arr, index) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i === arr[index]) {
//       newArr.pop(index);
//     }
//     newArr.push(arr[i]);
//   }
//   return newArr;
// }

// console.log(deleteElement(arr, 2));

// 2nd method

// let arr = [1, 2, 3, 4, 5];

// function deleteElement(arr, index) {
//   arr.splice(index, 1);
//   return arr;
// }

// console.log(deleteElement(arr, 2));
