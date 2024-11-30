document.addEventListener("DOMContentLoaded", () => {
  const navActionButton = document.querySelector("[data-nav-action='toggle']");
  const navComponent = document.querySelector("[data-nav='menu']");
  const body = document.body;

  if (navActionButton && navComponent) {
    navActionButton.addEventListener("click", () => {
      navActionButton.classList.toggle("dashboard__nav-action--active");
      navComponent.classList.toggle("dashboard__nav--active");

      if (body.style.overflow === "hidden") {
        body.style.overflow = "";
      } else {
        body.style.overflow = "hidden";
      }
    });
  }
});
