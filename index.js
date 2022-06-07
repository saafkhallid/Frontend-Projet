let btn = document.getElementById("cta-btn");
let ovelay = document.getElementById("ovelay");

btn.addEventListener("click", () => {
  ovelay.style.display = "grid";
  ovelay.classList.add("animation-ovelay");
});
