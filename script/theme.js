document
  .getElementById("floating-theme")
  .addEventListener("click", () => changeTheme());

let lightTheme = true;
function changeTheme() {
  const themeBtn = document.getElementById("floating-theme");
  if (lightTheme) {
    lightTheme = false;
    themeBtn.style.backgroundColor = "rgb(237, 237, 237)";
    themeBtn.style.borderColor = "rgb(0,0,0)";
    themeBtn.style.color = "rgb(0,0,0)";
    document.body.style.backgroundColor = "rgb(55, 55, 55)";
    document.querySelector("h1").style.color = "rgb(255,255,255)";
    document
      .querySelectorAll("p")
      .forEach((p) => (p.style.color = "rgb(255,255,255)"));
  } else {
    lightTheme = true;
    themeBtn.style.backgroundColor = "rgb(55, 55, 55)";
    themeBtn.style.borderColor = "rgb(255,255,255)";
    themeBtn.style.color = "rgb(255,255,255)";
    document.body.style.backgroundColor = " rgb(237, 237, 237)";
    document.querySelector("h1").style.color = "rgb(0,0,0)";
    document
      .querySelectorAll("p")
      .forEach((p) => (p.style.color = "rgb(0,0,0)"));
  }
}
