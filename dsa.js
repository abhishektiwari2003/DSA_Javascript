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

// Two pointer approach : -
// ---> Array should be sorted
// ---> And we assign one pointer as low and another pointer as high for eg here is the code for Two Sum leetcode ( #1 ) question using this approach :-

// var twoSum = function (nums, target) {
//   let i = 0;
//   let j = nums.length - 1;
//   let newArr = [];
//   while (i < j) {
//     sum = nums[i] + nums[j];
//     if (sum === target) {
//       newArr.push(i, j);
//       break;
//     } else if (sum < target) {
//       i++;
//     } else {
//       j--;
//     }
//   }
//   return newArr;
// };

// console.log(twoSum([2, 4, 6, 8, 10], 18));

// Solution of Intersection of two arrays (leetcode #349)

// var newFunction = function (nums1, nums2) {
//   newObj = {};

//   for (let num of nums1) {
//     newObj[num] = nums2.includes(num) ? 1 : 0;
//   }

//   let newArr = [];

//   for (let key in newObj) {
//     if (newObj[key] === 1) {
//       newArr.push(Number(key));
//     }
//   }

//   return newArr;
// };

// console.log(newFunction([9, 4, 9, 8, 4], [4, 9, 5]));

// Solution of Leetcode question of triplets

// var arithmeticTriplets = function (nums, diff) {
//   let result = [];
//   let found = false;
//   for (let i = 0; i < nums.length - 2; i++) {
//     for (let j = i + 1; j < nums.length - 1; j++) {
//       for (let k = j + 1; k < nums.length; k++) {
//         if (nums[j] - nums[i] == diff && nums[k] - nums[j] == diff) {
//           result.push(nums[i], nums[j], nums[k]);
//           !found;
//         }
//       }
//     }
//   }
//   if ((found = false)) {
//     return result;
//   }
//   return result.length / 3;
// };

// console.log(arithmeticTriplets([0, 1, 4, 6, 7, 10], 3));

// var threeSum = function (nums) {
//   let found = false;
//   let newArr = [];
//   for (let i = 0; i < nums.length - 2; i++) {
//     for (let j = i + 1; j < nums.length - 1; j++) {
//       for (let k = j + 1; k < nums.length; k++) {
//         if (nums[i] + nums[j] + nums[k] === 0) {
//           newArr.push([nums[i], nums[j], nums[k]]);
//           found = true;
//         }
//       }
//     }
//   }
//   if (!found) {
//     return newArr;
//   }
//   return newArr;
// };

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// Linked List

// Big O of Singly Linked List

// Case 1 inserting or delete in last node

// Insert a node in linked list its a constant operation because we always add
// node at tail thereby its complexity its O(1)

// Delete a node in linked list
// Since we are iterating over each element as soon as we reach second last
//node we assign it to null thereby last element of will get popped up
// therefore complexity is O(n)

// Case 2 Inserting or Deleting in Beginning node

// We just need to insert node in start thereby O(1) complexity
// We just assign head to next node after the first element and second
// element will be head now so the first element will get popped out

// Case 3 Inserting or Deleting in any middle node
// Inserting an element in middle is O(n) complexity
// Deleting an element in middle is O(n) complexity
// We just need to change the address

// Searching a node operation is always O(n) complexity

//Singly Linked list and method implementation :-
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// class SinglyLinkedList {
//   constructor(val) {
//     const newNode = new Node(val);
//     this.head = newNode;
//     this.tail = this.head;
//     this.length = 1;
//   }

//   push(val) {
//     const newNode = new Node(val);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = this.head;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.length++;
//     return this;
//   }

//   pop() {
//     if (!this.head) return undefined;
//     let temp = this.head;
//     let pre = this.head;
//     while (temp.next) {
//       pre = temp;
//       temp = temp.next;
//     }

//     this.tail = pre;
//     this.tail.next = null;
//     this.length--;

//     if (this.length == 0) {
//       this.head = null;
//       this.tail = null;
//     }
//     return temp;
//   }

//   unshift(value) {
//     const newNode = new Node(value);
//     newNode.next = this.head;
//     this.head = newNode;
//     this.length++;
//     return this;
//   }

//   shift() {
//     if (!this.head) return undefined;
//     let temp = this.head;
//     this.head = this.head.next;
//     this.length--;
//     if (this.length == 0) {
//       this.tail = null;
//     }
//     temp.next = null;
//     return temp;
//   }

//   get(index) {
//     if (index < 0 || index >= this.length) {
//       return undefined;
//     }
//     let temp = this.head;
//     for (let i = 0; i < index; i++) {
//       temp = temp.next;
//     }
//     return temp;
//   }

//   set(index, val) {
//     let temp = this.get(index);
//     if (temp) {
//       temp.val = val;
//       return true;
//     }
//     return false;
//   }

//   insert(index, val) {
//     if (index === 0) return this.unshift(val);
//     if (index === this.length) return this.push(val);
//     if (index < 0 || index >= this.length) return false;

//     const newNode = new Node(val);
//     const temp = this.get(index - 1);

//     newNode.next = temp.next;
//     temp.next = newNode;
//     this.length++;
//     return this;
//   }

//   remove(index) {
//     if (index === 0) return this.shift();
//     if (index === this.length - 1) return this.pop();
//     if (index < 0 || index >= this.length) return undefined;

//     const before = this.get(index - 1);
//     const temp = before.next;

//     before.next = temp.next;
//     temp.next = null;
//     this.length--;
//     return temp;
//   }

//   reverse() {
//     let temp = this.head;
//     this.head = this.tail;
//     let next = temp.next;
//     let prev = null;

//     for (let i = 0; i < this.length; i++) {
//       prev = this.next;
//       temp.next = prev;
//       prev = temp;
//       temp = next;
//     }

//     return this;
//   }
// }

// let first = new SinglyLinkedList(10);
// first.push(25);
// first.push(10);
// first.set(1, 35);
// first.insert(2, 100);
// console.log(first);
// first.pop();
// first.pop();
// first.pop();
// first.unshift(8);
// first.unshift(15);
// console.log(first.shift());
// console.log(first);
