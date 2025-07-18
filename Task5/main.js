// Input:
function printSquareNumber() {
  let n = Number(prompt("Nhập n"));
  if (isNaN(n)) {
    alert("Phải nhập bằng số");
  }
  let ketQua = 0;
  for (let i = 2; i <= n; i++) {
    ketQua = i * i;
    if (ketQua > n) {
      return;
    }
    console.log(ketQua);
  }
}

// Input:

function printPrimeNumber() {
  let n = Number(prompt("Nhập n"));
  if (isNaN(n)) {
    alert("Phải nhập bằng số");
  }
  for (let i = 2; i <= n; i++) {
    //* check i có phải là số nguyên tố không;
    //* có -> tìm cách in ra i
    checkPrime(i) && console.log(i);
  }
}
function checkPrime(x) {
  /*Nếu x là số nguyên tố -> true
   * Ngược lại thì trả về false
   * Kiểm tra từ 2 đến x thì có số naog mà x chia hết không?
   */
  for (let i = 2; i < x; i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
}
// console.log(checkPrime(7));

// Output:
/*
Bước 1: Kiểm tra số đó trong khoảng từ 2 đến n
Bước 2: Kiểm tra số đố phải là số nguyên tố
*/

// Input:
function printMultiplicationTable() {
  // Xử lý và in ra kết quả
  // B1: In ra từ 1 đến 10;
  //B2: Nhập n: và in ra i * n
  let n = Number(prompt("Nhập n"));
  if (isNaN(n)) {
    alert("Phải nhập bằng số");
  }
  for (let i = 1; i <= 10; i++) {
    let ketQua = i * n;
    console.log(`Bảng cửu chương của ${n} là ${i} * ${n} = ${ketQua}`);
  }
}

// Output:

// Hàm printChristmasTree(n, character) sẽ in ra cây thông noel với chiều cao n theo yêu cầu sau:
// Chỉ chấp nhận n là số nguyên dương nhỏ hơn 100, và character là một ký tự.
// Cây thông noel được in ra bằng ký tự character truyền vào.
// Cây thông noel được in ra theo dạng tam giác cân.
// Cây thông noel được in ra theo chiều cao n nếu chỉ tính tán cây, và cao n+1 nếu tính cả phần gốc.
// Cây thông noel được in ra theo độ rộng 2n - 1.
const printChristmasTree = () => {
  let character = prompt("Nhập ký tự để in cây thông:");
  let n = Number(prompt("Nhập số hàng cây (bé hơn 100):"));
  let trunk = "";
  if (n <= 0 || n >= 100) {
    console.log("Nhập đúng chiều cao < 100");
    return;
  }
  if (character.length !== 1) {
    console.log("Nhập chỉ 1 ký tự.");
    return;
  }
  for (let i = 0; i < n; i++) {
    let output = "";
    for (let j = 0; j < n - i - 1; j++) {
      output += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      output += character;
    }
    console.log(output,'output');
  }
  for (let j = 0; j < n - 1; j++) {
    trunk += " ";
  }
  trunk += character;
  console.log(trunk,'trunk');
};



