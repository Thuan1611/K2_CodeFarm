//Input:
// Thực hiện viết hàm calculateTotalCompletedAmount() để tính tổng tiền của các order có amount lớn hơn giá trị nhập vào và
// status = completed.
// Nếu không tìm được phần tử nào thì in ra 0.
const orders = [
  { id: 1, amount: 100, date: "2025-04-01", status: "completed" },
  { id: 2, amount: 200, date: "2025-04-02", status: "pending" },
  { id: 3, amount: 150, date: "2025-04-03", status: "completed" },
  { id: 4, amount: 300, date: "2025-04-04", status: "shipped" },
  { id: 5, amount: 50, date: "2025-04-05", status: "cancelled" },
  { id: 6, amount: 120, date: "2025-04-06", status: "completed" },
  { id: 7, amount: 180, date: "2025-04-07", status: "shipped" },
  { id: 8, amount: 220, date: "2025-04-08", status: "pending" },
  { id: 9, amount: 350, date: "2025-04-09", status: "completed" },
  { id: 10, amount: 500, date: "2025-04-10", status: "completed" },
];
function calculateTotalCompletedAmount(array, amount) {
  // Tính toán và in ra kết quả
  const newOrder = array.filter(
    (item) => item.status == "completed" && item.amount > amount
  );
  const total = newOrder.reduce((acc, cur) => (acc = acc + cur.amount), 0);
  return total;
}

// Output:
const result = calculateTotalCompletedAmount(orders, 150);
console.log(result, "Bài 1"); // 850

// const result2 = calculateTotalCompletedAmount(orders, 1000);
// console.log(result2); // 0

// Viết hàm removeDuplicate(arr) xoá phần tử trùng lặp trong mảng arr và trả về mảng mới không chứa phần tử trùng lặp.

// Khuyến khích sử dụng reduce() để giải quyết bài toán.
// Với NaN, nếu có nhiều hơn 1 NaN thì chỉ giữ lại 1 NaN.
// Với null, nếu có nhiều hơn 1 null thì chỉ giữ lại 1 null.
// Với undefined, nếu có nhiều hơn 1 undefined thì chỉ giữ lại 1 undefined.
// Input:
const fruits = [
  "apple",
  "banana",
  "kiwi",
  "kiwi",
  "banana",
  "orange",
  "apple",
  "kiwi",
];

const removeDuplicate = (arr) => {
  // Xử lý và in ra kết quả
  return arr.reduce((acc, item) => {
    if (!acc.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, []);
};

// Output:

console.log(removeDuplicate(fruits), "Bài 2"); // ["apple", "banana", "kiwi", "orange"]

Array.prototype.map2 = function (callback) {
  const result = new Array(this.length);

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      result[i] = callback(this[i], i, this);
    }
  }

  return result;
};

// Array.prototype.map2 = function (callback) {};

// Sample 1
const arr1 = [1, 2, 3, 4, 5];
const result1 = arr1.map2((value) => value * 2);

console.log(result1, "Bài 4"); // [2, 4, 6, 8, 10]
// console.log(result1.length); // 5

// // Sample 2
// const arr2 = [1, , , , 5]; // Có phần tử trống
// const result2 = arr2.map2((value) => value * 2);

// console.log(result2); // [2, , , , 10]
// console.log(result2.length); // 5

Array.prototype.forEach2 = function (callback) {
  const length = this.length;

  for (let i = 0; i < length; i++) {
    if (i in this) {
      callback(this[i], i, this);
    }
  }
};

