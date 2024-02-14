function openNav() {
  document.getElementById("side-nav").style.width = "100%";
  document.getElementById("menu-button").style.display = "none";
  document.getElementById("close-menu-button").style.display = "block";
}

function closeNav() {
  document.getElementById("side-nav").style.width = "0px";
  document.getElementById("menu-button").style.display = "block";
  document.getElementById("close-menu-button").style.display = "none";
}
