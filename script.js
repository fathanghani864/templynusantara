const h = document.getElementById("hamburger");
const i = document.getElementById("icon");
const m = document.getElementById("menu");
const n = document.getElementById("navbar");

h.addEventListener("click", () => {
  m.classList.toggle("show");

  if (i.classList.contains("fa-bars")) {
    i.classList.remove("fa-bars");
    i.classList.add("fa-xmark");
  } else {
    i.classList.remove("fa-xmark");
    i.classList.add("fa-bars");
  }
});

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 300) {
    n.classList.add("fixed");
  } else {
    n.classList.remove("fixed");
  }

  if (document.documentElement.scrollTop > 100) {
    n.classList.add("fromTop");

    if (m.classList.contains("show")) {
      m.classList.remove("show");
      i.classList.remove("fa-xmark");
      i.classList.add("fa-bars");
    }
  } else if (!n.classList.contains("fixed")) {
    n.classList.remove("fromTop");
  }
});
