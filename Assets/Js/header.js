document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const barsIcon = document.getElementById("barsIcon");
    const crossIcon = document.getElementById("crossIcon");

    // Toggle the navbar and icons when the navbar button is clicked
    navbarToggler.addEventListener("click", function () {
      // Toggle the navbar collapse
      const navbarCollapse = document.getElementById("mobileNav");
      navbarCollapse.classList.toggle("show");

      // Toggle the icons (bars and cross)
      if (navbarCollapse.classList.contains("show")) {
        barsIcon.style.display = "none";
        crossIcon.style.display = "block";
      } else {
        barsIcon.style.display = "block";
        crossIcon.style.display = "none";
      }
    });
  });