/* CalC: light / dark switch and footer year (used on every page except the calculator, which has its own) */
(function () {
  var tgl = document.getElementById("themeToggle");
  function sync() { if (tgl) { tgl.setAttribute("aria-checked", document.body.classList.contains("dark") ? "true" : "false"); } }
  if (tgl) {
    tgl.addEventListener("click", function () {
      var dark = document.body.classList.toggle("dark");
      try { localStorage.setItem("calc-theme", dark ? "dark" : "light"); } catch (e) {}
      sync();
    });
  }
  sync();
  var y = document.querySelectorAll(".js-year");
  for (var i = 0; i < y.length; i++) { y[i].textContent = new Date().getFullYear(); }
})();
