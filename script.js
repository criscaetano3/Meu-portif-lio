// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Menu ativo
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".js-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    if (scrollY >= section.offsetTop - 150) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("actived");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("actived");
    }
  });
});

// Dark mode
const toggle = document.getElementById("theme-toggle");
const body = document.body;

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  toggle.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
});

console.log("Portfólio carregado com sucesso 🚀");
