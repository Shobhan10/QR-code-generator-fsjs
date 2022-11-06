const input = document.getElementById("input");
const button = document.getElementById("submit");
const qrImg = document.getElementById("img");

button.addEventListener("click", () => {
  const inputValue = input.value;
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${inputValue}`;
  qrImg.style.display = "block";
});
