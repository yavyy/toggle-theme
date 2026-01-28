const checkboxInput = document.getElementById("input");
const themeSwitchBtn = document.querySelector(".label .theme-switch-btn");

const savedTheme = localStorage.getItem("theme")

if (savedTheme) {
  document.body.style.backgroundColor = savedTheme;
  themeSwitchBtn.style.backgroundColor = savedTheme;
  checkboxInput.checked = savedTheme === "black";
}

checkboxInput.addEventListener('change', function (e) {
  const theme = e.target.checked ? "black" : "white";
  localStorage.setItem("theme", theme)

  document.body.style.backgroundColor = theme;
  themeSwitchBtn.style.backgroundColor = theme;
})