// Mengambil elemen hamburger dan menu
const h = document.getElementById("hamburger");
const m = document.getElementById("menu");

// Mengambil elemen navbar
const n = document.getElementById("navbar");

// Event listener untuk klik pada hamburger
h.addEventListener("click", () => {
  m.classList.toggle("active");
  h.classList.toggle("active");
});

// Event listener untuk scroll
window.addEventListener("scroll", () => {
  const scrollPosition =
    document.body.scrollTop || document.documentElement.scrollTop;

  // Logika untuk menambahkan kelas 'fixed' dan 'fromTop'
  if (scrollPosition > 300) {
    n.classList.add("fixed", "fromTop");
  } else {
    n.classList.remove("fixed", "fromTop");
  }

  // Logika untuk menyembunyikan menu saat di-scroll
  if (scrollPosition > 100 && h.classList.contains("active")) {
    m.classList.remove("active");
    h.classList.remove("active");
  }
});
