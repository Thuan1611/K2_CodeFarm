const students = [
  { id: 1, name: "Nguyễn Văn A", age: 20, city: "Hà Nội" },
  { id: 2, name: "Trần Thị B", age: 19, city: "TP.HCM" },
  { id: 3, name: "Lê Văn C", age: 21, city: "Đà Nẵng" },
];
// Tạo một chuỗi HTML cho bảng, bao gồm:
// Hàng tiêu đề với các cột: "ID", "Tên", "Tuổi", "Thành phố".
// Các hàng dữ liệu từ mảng students.
// Chèn chuỗi HTML vào bảng bằng innerHTML.
// Thêm kiểu viền và căn chỉnh cho bảng bằng CSS thông qua JavaScript.
const dataTable = document.querySelector("#dataTable");

let table = `
 <thead>
    <tr>
        <th>ID</th>
        <th>Ten</th>
        <th>Tuoi</th>
        <th>Thanh pho</th>
    </tr>
 </thead>   
 <tbody>
`;
students.forEach((item) => {
  console.log(item.id);
  table =
    table +
    `
        <tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.age}</td>
        <td>${item.city}</td>
     
    </tr>
    `;
});
table += `</tbody>`;
dataTable.innerHTML += table;
dataTable.style.border = "1px solid black";
