// Tạo một nút "Chuyển chế độ" để thay đổi nền trang giữa chế độ sáng (nền trắng)
// và chế độ tối (nền đen) khi nhấn.
// Lưu trạng thái chế độ (sáng/tối) vào localStorage để giữ nguyên khi tải lại trang.

function toggleMode() {
  const body = document.querySelector("body");
  const isCheck = body.className === "dark-mode";
  console.log(body.className = isCheck ? "light-mode" : "dark-mode")
}
