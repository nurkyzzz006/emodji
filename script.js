let list = document.querySelector(".list");
let burger = document.querySelector(".burger");
let x = document.querySelector(".x");
burger.addEventListener("click", () => {
  list.style.display = "block";
  list.style.flex_direction = "column"
});
// list.addEventListener("click", () => {

// });
x.addEventListener("click", () => {
  list.style.display = "none";
});
