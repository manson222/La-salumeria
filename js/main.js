const elemBtn__toggleNavbar = document.getElementById("btn-toggle-navbar-mobile");
const elem__navBarMobile = document.querySelector(".navbar-mobile");

elemBtn__toggleNavbar.addEventListener("click", function () {
    elem__navBarMobile.classList.toggle("active");
});