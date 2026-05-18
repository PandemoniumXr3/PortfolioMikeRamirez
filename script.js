const filterButtons = document.querySelectorAll(".filter");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    projectCards.forEach((card) => {
      const category = card.dataset.category;

      if (filter === "all" || filter === category) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});

window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav");

  if (window.scrollY > 60) {
    nav.style.borderBottom = "1px solid rgba(244,239,231,0.08)";
  } else {
    nav.style.borderBottom = "none";
  }
});