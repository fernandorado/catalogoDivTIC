let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.onload = function () {
  // Verificar si estamos en la página de inicio
  if (window.location.pathname.endsWith("index.html")) {
    // Verificar si la URL ya contiene #services
    if (window.location.href.indexOf("#services") === -1) {
      // Verificar si el fragmento actual es diferente de #home
      if (window.location.hash !== "#home") {
        // Si no contiene #services ni #home, agregar #services a la URL
        window.location.href = window.location.href + "#services";
      }
    }
  }
};

window.addEventListener("DOMContentLoaded", function () {
  var currentHash = window.location.hash;
  var navbarLinks = document.querySelectorAll(".navbar a");

  navbarLinks.forEach(function (link) {
    if (link.getAttribute("href") === currentHash) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  //Remover navbar cuando se selecciona
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};
