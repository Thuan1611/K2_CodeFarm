// Viết hàm biến đổi mảng các chuỗi "key:value" thành object
// Thực hiện viết hàm convertArrayToObject() để biến đổi mảng các chuỗi dạng key:value thành object

// Input:
const arrayString = ["name:John", "age:30", "city:NY"];

function convertArrayToObject(array) {
  return array.reduce((acc, cur) => {
    const [key, value] = cur.split(":");
    console.log(key, "key");
    console.log(value, "value");
    acc[key] = value;
    return acc;
  }, {});
}

// Output:
console.log(convertArrayToObject(arrayString)); // { name: 'John', age: '30', city: 'NY' }

const categories = [
  { id: 1, name: "Chuyên mục 1", parent: 0 },
  { id: 2, name: "Chuyên mục 2", parent: 0 },
  { id: 3, name: "Chuyên mục 3", parent: 0 },
  { id: 4, name: "Chuyên mục 2.1", parent: 2 },
  { id: 5, name: "Chuyên mục 2.2", parent: 2 },
  { id: 6, name: "Chuyên mục 2.3", parent: 2 },
  { id: 7, name: "Chuyên mục 3.1", parent: 3 },
  { id: 8, name: "Chuyên mục 3.2", parent: 3 },
  { id: 9, name: "Chuyên mục 3.3", parent: 3 },
  { id: 10, name: "Chuyên mục 2.2.1", parent: 5 },
  { id: 11, name: "Chuyên mục 2.2.2", parent: 5 },
];

function convertNested(arr, parentId = 0) {
  return arr
    .filter((item) => item.parent === parentId)
    .map((item) => {
      const children = convertNested(arr, item.id);
      if (children.length > 0) {
        return { ...item, children };
      } else {
        return { ...item };
      }
    });
}
console.log(convertNested(categories));

// Hàm sortUsersByName(users):

// Nhận vào một mảng các object người dùng, mỗi object có thuộc tính fullName.
// Trả về mảng đã được sắp xếp theo thứ tự bảng chữ cái từ a-z của tên.
// Nếu tên của hai người giống nhau, tiếp tục so sánh theo họ và tên đệm (Biết rằng người Việt có tên là 1 từ đơn đứng ở cuối cùng, còn lại toàn bộ các từ trong tên đầy đủ của người Việt được coi là họ và tên đệm).
// Ví dụ:

// Nguyễn Minh Hoàng -> "Hoàng" là tên, "Nguyễn Minh" là họ và tên đệm.
// Nguyễn Thị Thuỳ Linh -> "Linh" là tên, "Nguyễn Thị Thuỳ" là họ và tên đệm.
const users = [
  { fullName: "Nguyễn Minh Hoàng" },
  { fullName: "Nguyễn Đức Hoàng" },
  { fullName: "Lê Văn" },
  { fullName: "Lê Văn Tình" },
  { fullName: "Lê Nin" },
];

function sortUsersByName(users) {
  for (let i = 0; i < users.length; i++) {
    let fullname = users[i].fullName.split(" ");
    users[i].lastName = fullname[fullname.length - 1];
    users[i].firstName = fullname.slice(0, fullname.length - 1).join(" "); 
  }

  users.sort((a, b) => {
    if (a.lastName < b.lastName) return -1;
    if (a.lastName > b.lastName) return 1;

    if (a.firstName < b.firstName) return -1;
    if (a.firstName > b.firstName) return 1;

    return 0;
  });

  users.forEach((user) => {
    delete user.firstName;
    delete user.lastName;
  });

  return users;
}

console.log(sortUsersByName(users));
