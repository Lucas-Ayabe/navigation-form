const linkButtonsSelector = ".horizontal-form [aria-controls]";
const linkButtons = document.querySelectorAll(linkButtonsSelector);
const contents = document.querySelectorAll(".horizontal-form .content");

const toggleFormFrom = (elements) => (linkButton) => (event) => {
  event.preventDefault();
  const toSelector = linkButton.getAttribute("aria-controls");
  const to = document.getElementById(toSelector);
  elements.forEach((content) => content.setAttribute("hidden", true));
  to.removeAttribute("hidden");
};

const toggleFrom = toggleFormFrom(contents);

const init = (linkButton) => {
  linkButton.addEventListener("click", toggleFrom(linkButton));
};

linkButtons.forEach(init);
