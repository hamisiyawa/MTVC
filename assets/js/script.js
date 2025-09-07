// ==============================
// Scroll-to-Top Button
// ==============================
const toTopBtn = document.getElementById("toTopBtn");

window.addEventListener("scroll", function () {
  if (window.scrollY > window.innerHeight) {
    toTopBtn.style.display = "flex";
  } else {
    toTopBtn.style.display = "none";
  }
});

toTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ==============================
// Sticky Navbar (works with top bar partial)
// ==============================
function initStickyNavbar() {
  const topBar = document.querySelector(".top-bar");
  const navbar = document.querySelector(".navbar");

  if (!topBar || !navbar) return; // Exit if missing

  const topBarHeight = topBar.getBoundingClientRect().height;

  function checkSticky() {
    if (window.scrollY >= topBarHeight) {
      navbar.classList.add("fixed-top");
    } else {
      navbar.classList.remove("fixed-top");
    }
  }

  // Run once immediately
  checkSticky();

  // Run on every scroll
  window.addEventListener("scroll", checkSticky);
}

// ==============================
// Wait until DOM + partials are loaded
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  // delay slightly so partials (topbar, navbar, footer) finish loading
  setTimeout(initStickyNavbar, 400);
});
