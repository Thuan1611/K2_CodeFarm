const textInput = document.getElementById("textInput");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");
const maxLength = textInput.getAttribute("maxlength");

textInput.addEventListener("input", () => {
  const text = textInput.value;
  
  const wordsLength = text === "" ? 0 : text.split(/\s+/).length;
  wordCount.textContent = `Số từ: ${wordsLength}`;

  const wordsPrevous = maxLength - textInput.value.length;
  charCount.textContent = `Số ký tự còn lại: ${wordsPrevous}`;

});