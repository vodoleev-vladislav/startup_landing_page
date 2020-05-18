(() => {
  const list = document.querySelector(".nav__list");
  const checkbox = document.getElementById("menu-toggle");
  list.addEventListener("click", (e) => {
    if ((e.target.className = "nav__link") && checkbox.checked)
      checkbox.checked = false;
  });
})();
