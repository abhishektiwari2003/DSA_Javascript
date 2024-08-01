// Time Complexity Notes:

// O(n) understanding
// The number of operations performed is directly proportional to n.
// The graph is linear, similar to y = x.

function linearLoop(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

linearLoop(11);

// O(n^2) understanding
// The number of operations performed is proportional to the square of n.
// The graph resembles a parabola, similar to y = x^2.

function quadraticLoop(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

quadraticLoop(10);

// O(n) is more efficient than O(n^2)

// O(1) understanding
// The number of operations performed is constant, regardless of the input size.
// The graph is similar to y = 0.

function example(n) {
  return n + n;
}

console.log(example(6));

// O(logn) understanding
// The logarithm in O(logn) typically has a base of 2.
// Every time n increases, the time or space increases by a factor of log2(n).
// The graph is similar to the graph of log(n).

function logarithmicExample(n) {
  let i = n;
  while (i > 1) {
    console.log(i);
    i = Math.floor(i / 2);
  }
}

console.log(logarithmicExample(8));

// Space Complexity

// O(1) understanding
// Since the memory only holds one variable and no new variable is created,
// the complexity is O(1).

function beginnerExample(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

beginnerExample([10, 20, 30, 40, 50]);

// O(n) understanding
// The size of the array depends on the number of inputs,
// so the complexity is O(n).

function example1(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i);
  }
  return arr;
}

console.log(example1(10));

// O(logn) understanding
// Here, the base of the logarithm is 2.
// For an input size of 16, the number of operations is 4,
// therefore the complexity is O(logn).

function linearthmicExample(n) {
  let res = [];
  for (let i = 1; i < n; i *= 2) {
    res.push(i);
  }
  return res;
}

console.log(linearthmicExample(16));
