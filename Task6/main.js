function cleanFalsyValues() {
  let arr = [1, 0, "", null, "hello", undefined, NaN, 2, 3];
  let n = arr.length;
  let result = [];
  for (let i = 0; i < n; i++) {
    if (arr[i]) {
      result.push(arr[i]);
    }
  }
  console.log(result);
  return result;
}

// cleanFalsyValues([1, 0, "", null, "hello", undefined, NaN, 2, 3]); // Output: [1, "hello", 2, 3]

function filterEvenNumbers() {
  // Xử lý và in ra kết quả
  let arr = [1, 2, 3, 4, 5, 6];

  let n = arr.length;
  let result = [];
  for (let i = 0; i < n; i++) {
    // console.log(arr[i]);
    if (arr[i] % 2 == 0) {
      result.push(arr[i]);
    }
  }
  console.log(result);
  return result;
} // Output: [2, 4, 6]
function filterLongStrings() {
  // Xử lý và in ra kết quả
  let arr = ["hello", "world", "javascript", "nodejs"];
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 5) {
      result.push(arr[i]);
    }
  }
  console.log(result);
  return result;
} // Output: ["javascript", "nodejs"]

const checkSoNguyenTo = (n) => {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
};
function findMinMaxAverage() {
  let arr = [-3, 7, -8, 11, 0];
  let result = {};
  let max = arr[0];
  let maxIndex = 0;
  let min = arr[0];
  let minIndex = 0;
  let sum = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
    }
    if (arr[i] < min) {
      min = arr[i];
      minIndex = i;
    }
    if (checkSoNguyenTo(arr[i])) {
      sum = sum + arr[i];
      count++;
    }
  }
  result.max = max;
  result.maxIndex = maxIndex;
  result.min = min;
  result.minIndex = minIndex;
  result.primeAverage = Number((sum / count).toFixed(2));
  console.log(result);
} // Output: {max: 11, maxIndex: 3, min: -8, minIndex: 2, primeAverage: 9 }
function insertNumber() {
  let arr = [5, 2, 8];
  let num = NaN;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && !isNaN(arr[i])) {
      result.push(arr[i]);
    }
  }
  if (typeof num === "number" && !isNaN(num)) {
    result.push(num);
  }
  for (let i = 0; i < result.length; i++) {
    for (let j = i + 1; j < result.length; j++) {
      if (result[i] > result[j]) {
        let temp = result[j];
        result[j] = result[i];
        result[i] = temp;
      }
    }
  }
  console.log(result);

  return result;
}

// Output:
// insertNumber([1, 3, 5, 7, 9], 6); // Output: [1, 3, 5, 6, 7, 9]
// insertNumber([3, "hello", 1, NaN, 4, null], 2); // Output: [1, 2, 3, 4]
// insertNumber([], 5); // Output: [5]
// insertNumber([-1, 10, -5, "abc"], -3); // Output: [-5, -3, -1, 10]
insertNumber(); // Output: [2, 5, 8]
