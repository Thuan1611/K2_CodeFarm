function countTotalWords(arr) {
  // Logic bài tập và trả về kết quả
  const result = arr.join(" ").split(" ");
  return result.length;
}

// Output:
console.log(
  countTotalWords(["Hello world", "JS is fun", "Arrays and strings"])
); // 8)

// Hãy viết hàm flattenCategories(arr) để làm phẳng mảng categories bất kỳ.
// Mảng đã làm phẳng là mảng 1 chiều với mỗi phần tử trong mảng mới sẽ chứa thông tin của một danh mục với thêm trường parentId để tham chiếu đến danh mục cha của danh mục đó.
// Nếu parentId của danh mục cha không có thì gán bằng 0.
// Input:
const categories = [
  {
    id: 1,
    name: "Electronics",
    children: [
      {
        id: 2,
        name: "Laptops",
        children: [
          {
            id: 3,
            name: "Apple",
          },
          {
            id: 4,
            name: "Dell",
          },
        ],
      },
      {
        id: 5,
        name: "Headphones",
      },
    ],
  },
  {
    id: 6,
    name: "Books",
    children: [
      {
        id: 7,
        name: "Fiction",
        children: [
          {
            id: 8,
            name: "Thrillers",
          },
          {
            id: 9,
            name: "Mystery",
          },
        ],
      },
      {
        id: 10,
        name: "Non-Fiction",
      },
    ],
  },
];
const flattenCategories = (categories) => {
  const categoriesNew = categories.map((item) => ({ ...item, parentId: 0 }));
  //   console.log(categoriesNew)
  const result = [];

  while (categoriesNew.length) {
    const current = categoriesNew.pop();
    const { id, name, parentId } = current;

    result.push({ id, name, parentId });

    if (current.children) {
      const children = current.children.map((child) => ({
        ...child,
        parentId: current.id,
      }));

      categoriesNew.push(...children);
    }
  }

  return result.sort((a, b) => a.id - b.id);
};

console.log(flattenCategories(categories));

// Output:
// [
//   { id: 1, name: "Electronics", parentId: 0 },
//   { id: 2, name: "Laptops", parentId: 1 },
//   { id: 3, name: "Apple", parentId: 2 },
//   { id: 4, name: "Dell", parentId: 2 },
//   { id: 5, name: "Headphones", parentId: 1 },
//   { id: 6, name: "Books", parentId: 0 },
//   { id: 7, name: "Fiction", parentId: 6 },
//   { id: 8, name: "Thrillers", parentId: 7 },
//   { id: 9, name: "Mystery", parentId: 7 },
//   { id: 10, name: "Non-Fiction", parentId: 6 },
// ];
// Input:
const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Mouse", price: 50 },
  { id: 3, name: "Keyboard", price: 150 },
  { id: 4, name: "Monitor", price: 300 },
  { id: 5, name: "USB Cable", price: 25 },
  { id: 6, name: "Webcam", price: 120 },
  { id: 7, name: "Desk Lamp", price: 80 },
  { id: 8, name: "Headphones", price: 200 },
  { id: 9, name: "Speaker", price: 180 },
  { id: 10, name: "Chair", price: 250 },
];

function filteredProductNames(products, price) {
  //   const result = products.filter((item) => item.price >= price);
  //   return result;
  const result = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].price >= price) {
      result.push(products[i]);
    }
  }
  return result
}
// Output:
const result = filteredProductNames(products, 200);
console.log(result); // [ 'Laptop', 'Monitor', ''Headphones, 'Chair' ]
