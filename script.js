const h = document.getElementById("hamburger");
const m = document.getElementById("menu");

h.addEventListener("click", () => {
  m.classList.toggle("show");
  h.classList.toggle("active");
});

const n = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    n.classList.add("fixed");
  } else {
    n.classList.remove("fixed");
  }
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    n.classList.add("fromTop");
    if (h.classList.contains("active")) {
      m.classList.remove("show");
      h.classList.remove("active");
    }
  } else if (n.classList.contains("fixed")) {
    n.classList.remove("fromTop");
  } else {
    n.classList.remove("fromTop");
  }
});
