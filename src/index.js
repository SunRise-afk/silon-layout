import "./style.scss";

document.querySelector(".burger").addEventListener("click", () => {
  document.querySelector(".burger_button").classList.toggle("close");
  document.querySelector(".burger_nav").classList.toggle("close");
});
