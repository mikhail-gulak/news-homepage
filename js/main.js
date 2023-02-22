const BREAKPOINT = 920;
const SELECTORS = [
  ".navbar__container",
  ".navbar__btn--open",
  ".navbar__btn--close",
];

let [menu, openButton, closeButton] = SELECTORS.map((selector) => {
  return document.querySelector(selector);
});

window.addEventListener("resize", () => {
  let inlineSize = window.innerWidth;
  if (inlineSize > BREAKPOINT) {
    close();
  }
});

openButton.addEventListener("click", () => open());
closeButton.addEventListener("click", () => close());

function open() {
  document.body.classList.add("body--dimmed");
  menu.classList.add("navbar__container--expanded");
  openButton.classList.add("navbar__btn--hidden");
}

function close() {
  document.body.classList.remove("body--dimmed");
  menu.classList.remove("navbar__container--expanded");
  openButton.classList.remove("navbar__btn--hidden");
}
