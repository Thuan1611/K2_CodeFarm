const products = [
  {
    name: "Sony Playstation 5",
    url: "https://res.cloudinary.com/diefuqpsy/image/upload/v1757739037/playstation_5_tywoqq.png",
    type: "games",
    price: 499.99,
  },
  {
    name: "Samsung Galaxy",
    url: "https://res.cloudinary.com/diefuqpsy/image/upload/v1757739038/samsung_galaxy_iad0cv.png",
    type: "smartphones",
    price: 399.99,
  },
  {
    name: "Cannon EOS Camera",
    url: "https://res.cloudinary.com/diefuqpsy/image/upload/v1757739063/cannon_eos_camera_ydidrx.png",
    type: "cameras",
    price: 749.99,
  },
  {
    name: "Sony A7 Camera",
    url: "https://res.cloudinary.com/diefuqpsy/image/upload/v1757739037/sony_a7_camera_xvkxwd.png",
    type: "cameras",
    price: 1999.99,
  },
  {
    name: "LG TV",
    url: "https://res.cloudinary.com/diefuqpsy/image/upload/v1757739061/lg_tv_yl0k03.png",
    type: "televisions",
    price: 799.99,
  },
  {
    name: "Nintendo Switch",
    url: "https://res.cloudinary.com/diefuqpsy/image/upload/v1757739061/nintendo_switch_diq6cy.png",
    type: "games",
    price: 299.99,
  },
  {
    name: "Xbox Series X",
    url: "https://res.cloudinary.com/diefuqpsy/image/upload/v1757739037/xbox_series_x_e9yex6.png",
    type: "games",
    price: 499.99,
  },
  {
    name: "Samsung TV",
    url: "https://res.cloudinary.com/diefuqpsy/image/upload/v1757739037/samsung_tv_adpfag.png",
    type: "televisions",
    price: 1099.99,
  },
  {
    name: "Google Pixel",
    url: "https://res.cloudinary.com/diefuqpsy/image/upload/v1757739064/google_pixel_r2bpdo.png",
    type: "smartphones",
    price: 499.99,
  },
  {
    name: "Sony ZV1F Camera",
    url: "https://res.cloudinary.com/diefuqpsy/image/upload/v1757739037/sony_zv1f_camera_o7kt3t.png",
    type: "cameras",
    price: 799.99,
  },
  {
    name: "Toshiba TV",
    url: "https://res.cloudinary.com/diefuqpsy/image/upload/v1757739037/toshiba_tv_sdsrnz.png",
    type: "televisions",
    price: 499.99,
  },
  {
    name: "iPhone 14",
    url: "https://res.cloudinary.com/diefuqpsy/image/upload/v1757739062/iphone_14_fhu2gq.png",
    type: "smartphones",
    price: 999.99,
  },
];
const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search");
const sortSelect = document.getElementById("sort");
const filterCheckboxes = document.querySelectorAll(".filter-type");

function renderProducts(list) {
  productList.innerHTML = list
    .map(
      (p) => `
        <div class="product">
          <img src="${p.url}" alt="${p.name}">
          <h3>${p.name}</h3>
          <p>${p.price.toLocaleString()} $</p>
        </div>
      `
    )
    .join("");
}

function filterProducts() {
  let filtered = [...products];

  const keyword = searchInput.value.toLowerCase();
  if (keyword) {
    filtered = filtered.filter((p) => p.name.toLowerCase().includes(keyword));
  }

  const selectedTypes = [...filterCheckboxes]
    .filter((cb) => cb.checked)
    .map((cb) => cb.value);
  if (selectedTypes.length > 0) {
    filtered = filtered.filter((p) => selectedTypes.includes(p.type));
  }

  // Sắp xếp giá
  const sortValue = sortSelect.value;
  if (sortValue === "asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortValue === "desc") {
    filtered.sort((a, b) => b.price - a.price);
  }

  renderProducts(filtered);
}

// Gắn sự kiện
searchInput.addEventListener("input", filterProducts);
sortSelect.addEventListener("change", filterProducts);
filterCheckboxes.forEach((cb) => cb.addEventListener("change", filterProducts));

// Render ban đầu
renderProducts(products);
