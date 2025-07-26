// Input:
// Mảng đối xứng là mảng mà đọc từ trái sang phải hay từ phải sang trái đều giống nhau.
// Ví dụ: [1, 2, 3, 4, 3, 2, 1], [1, 2, 3, 3, 2, 1], [1, 2, 3, 2, 1] là mảng đối xứng.
// Nếu mảng nhập vào chỉ có 1 phần tử, báo là Mảng có 1 phần tử, không kiểm tra được.
// Nếu dữ liệu nhập vào không hợp lệ, báo là Dữ liệu không hợp lệ.
// Nếu mảng đối xứng, trả về true, ngược lại trả về false.
const arrayNumber = [1, 2, 3, 3, 2, 1];
function checkSymmetricalArr(arr) {
  if (arr.length <= 1) {
    console.log("Mảng không hợp lệ");
    return;
  }
  if (!Array.isArray(arr)) {
    console.log("Dữ liệu không hợp lệ");
    return;
  }
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      console.log(arr[i]);

      return false;
    }
  }
  return true;
}

// Output:
console.log(checkSymmetricalArr(arrayNumber)); //true

function findSecondLargestNumber(arr) {
  if (arr.length < 2) return -1;

  let max = arr[0];
  let secondMax = null;

  for (let i = 1; i < arr.length; i++) {
    const num = arr[i];

    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num < max && (secondMax === null || num > secondMax)) {
      secondMax = num;
    }
  }

  return secondMax === null ? -1 : secondMax;
}

console.log(findSecondLargestNumber([1, 2, 3, 4, 5]))

const students = [
  { name: "An", scores: [8, 7.5, 9] },
  { name: "Bình", scores: [6, 5.5, 7] },
  { name: "Chi", scores: [9, 9.5, 10] },
];

const getStudentAverages = (students) => {
  return students.map((student) => {
    let total = 0;
    student.scores.forEach((score) => {
      total += score;
    });
    const average = Math.round((total / student.scores.length) * 10) / 10;
    return {
      name: student.name,
      average: average,
    };
  });
};

console.log(getStudentAverages(students));

function findCommonElement(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    console.log("Dữ liệu không hợp lệ");
    return;
  }
  const unique1 = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!unique1.includes(arr1[i])) {
      unique1.push(arr1[i]);
    }
  }

  const unique2 = [];
  for (let i = 0; i < arr2.length; i++) {
    if (!unique2.includes(arr2[i])) {
      unique2.push(arr2[i]);
    }
  }

  // Tìm phần tử chung
  const result = [];
  for (let i = 0; i < unique1.length; i++) {
    if (unique2.includes(unique1[i])) {
      result.push(unique1[i]);
    }
  }

  if (result.length === 0) {
    console.log("false");
  } else {
    console.log(...result);
  }
}
findCommonElement([1, 2, 3], [2, 3, 4]);
// findCommonElement([1, 2, 2, 3, 4], [2, 3, 4, 5]);
