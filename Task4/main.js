// Viết hàm calcBMI(weight, height)
// nhận vào cân nặng weight (kg) và chiều cao height (m)
// của một người từ bàn phím (gợi ý sử dụng window.prompt()), trả về chỉ số BMI và gợi ý sức khoẻ tương ứng:

// BMI < 18.5: Thiếu cân
// 18.5 <= BMI < 23: Bình thường
// 23 <= BMI < 25: Thừa cân
// BMI >= 25: Béo phì
// Với công thức: BMI = weight / height^2 (làm tròn 2 chữ số thập phân)
// Input:
const calcBMI = () => {
  let weight = Number(prompt("Nhập vào cân nặng"));
  console.log(weight, "weight");
  let height = Number(prompt("Nhập vào chiều cao"));
  console.log(height, "height");
  if (isNaN(weight) || isNaN(height)) {
    console.log("phải nhập bằng số");
    return;
  }
  height = height > 100 ? height / 100 : height;
  console.log(height);

  let BMI = weight / (height * height);
  BMI = BMI.toFixed(2);

  if (BMI < 18.5) {
    alert(`chỉ số ${BMI}: Thiếu cân`);
  } else if (BMI > 18.5 && BMI < 23) {
    alert(`chỉ số ${BMI}: Bình thường`);
  } else if (BMI > 23 && BMI < 25) {
    alert(`chỉ số ${BMI}: Thừa cân`);
  } else if (BMI > 25) {
    alert(` chỉ số ${BMI}: Béo phì`);
  }
};

// Bài 2
// Viết hàm swapNumber(a,b) thực hiện hoán vị 2 số không dùng biến trung gian và không được dùng kiến thức về mảng:

// Input:
const swapNumber = () => {
  let a = Number(prompt("Nhập a: "));
  let b = Number(prompt("Nhập b: "));
  if (isNaN(a) || isNaN(b)) {
    console.log("phải nhập bằng số");
    return;
  }
  a = a - b; //a = 3-5 = a = -2
  b = b + a; // b = b + a = 5+ -2 = 3;
  a = b - a; // a = 5 => b - a = 3 -- 2 =5
  console.log(a);
  console.log(b);
};
//Bài 3
const sortNumber = () => {
  let a = Number(prompt("Nhập a: "));
  let b = Number(prompt("Nhập b: "));
  let c = Number(prompt("Nhập c: "));
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log("phải nhập bằng số");
    return;
  }
  //   VD: a = 7 b=5; c=2;
  // a > b, hoán đổi
  if (a > b) {
    a = a - b; //a = 3-5 = a = -2
    b = b + a; // b = b + a = 5+ -2 = 3;
    a = b - a; // a = 5 => b - a = 3 -- 2 =5
  }
  console.log(a, b, c, "a,b,c"); //5,7,2

  //  a > c, hoán đổi
  if (a > c) {
    a = a - c; //a = 3-5 = a = -2
    c = c + a; // b = b + a = 5+ -2 = 3;
    a = c - a; // a = 5 => b - a = 3 -- 2 =5
  }
  console.log(a, b, c, "a,b,c"); // 2,7,5

  //  b > c, hoán đổi
  if (b > c) {
    b = b - c; //a = 3-5 = a = -2
    c = c + b; // b = b + a = 5+ -2 = 3;
    b = c - b; // a = 5 => b - a = 3 -- 2 =5
  }

  console.log(a, b, c, "a,b,c"); //2,5,7
};
//Bài 4
const isTriangle = () => {
  let a = Number(prompt("Nhập a: "));
  let b = Number(prompt("Nhập b: "));
  let c = Number(prompt("Nhập c: "));
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log("phải nhập bằng số");
    return;
  }
  //   Tam giác = tổng độ dài của 2 cạnh lớn hơn cạnh còn lại; ab>c ; ac> b;bc>a
  if (a + b > c && a + c > b && b + c > a) {
    alert("Đây là tam giác hợp lệ");
    return true;
  } else {
    alert("Đây là không phải tam giác hợp lệ");
    return false;
  }
};
