const register = document.querySelector(".box-register");
const login = document.querySelector(".box-login");

function flipToLogin() {
  register.style.transform = "rotateY(180deg)";
  login.style.transform = "rotateY(0deg)";
  login.style.zIndex = "2";
  register.style.zIndex = "1";
}

function flipToRegister() {
  register.style.transform = "rotateY(0deg)";
  login.style.transform = "rotateY(-180deg)";
  register.style.zIndex = "2";
  login.style.zIndex = "1";
}

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");

one.addEventListener("mouseenter", () => {
  one.style.fontSize = "35px";
  two.style.color = "#ff9b42";
  three.style.color = "#ff9b42";
});

one.addEventListener("mouseleave", () => {
  one.style.fontSize = "";
  two.style.color = "";
  three.style.color = "";
});

two.addEventListener("mouseenter", () => {
  two.style.fontSize = "35px";
  one.style.color = "#ff9b42";
  three.style.color = "#ff9b42";
});

two.addEventListener("mouseleave", () => {
  two.style.fontSize = "";
  one.style.color = "";
  three.style.color = "";
});
