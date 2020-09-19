window.addEventListener("scroll", function () {
    var navbar = document.getElementsByClassName("container-fluid")[0];
    navbar.classList.toggle("sticky", window.scrollY > 0);
});
