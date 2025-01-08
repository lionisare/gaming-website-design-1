const navbarMenu = document.getElementById("navbar-menu"),
  btnMenu = document.getElementById("btn-menu"),
  btnClose = document.getElementById("btn-close");

if (btnMenu) {
  btnMenu.addEventListener("click", () => {
    navbarMenu.classList.add("open-menu");
  });
}
if (btnClose) {
  btnClose.addEventListener("click", () => {
    navbarMenu.classList.remove("open-menu");
  });
}
