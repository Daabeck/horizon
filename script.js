const form = document.querySelector("#access-form");
const horizon = document.querySelector(".backdrop__horizon");
const glow = document.querySelector(".backdrop__glow");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
}

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches === false) {
  window.addEventListener("pointermove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 2;
    const y = (event.clientY / window.innerHeight - 0.5) * 2;

    if (horizon) {
      horizon.style.transform = `translate3d(${x * 10}px, 0, 0)`;
    }

    if (glow) {
      glow.style.transform = `translate3d(${x * 16}px, ${y * 10 - 110}px, 0)`;
    }
  });
}
