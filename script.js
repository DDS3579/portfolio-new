const width = window.outerWidth;
const btn = document.getElementById("btn-collapse");
const list = document.getElementById("ul-change");
const avatarM = document.getElementById("avatar-div");
const avatarPC = document.getElementById("avatar-div-pc");
let react = document.getElementById("react");
let sql = document.getElementById("mySQL");
let blocky = document.getElementById("blocky");

// Responsive Page
if (width >= 768) {
  avatarM.style.display = "none";
  avatarPC.style.display = "";
} else {
  avatarM.style.display = "";
  avatarPC.style.display = "none";
}

if (width <= 635) {
  react.style.width = "60%";
  sql.style.width = "60%";
  blocky.style.width = "80%";
}

if (width < 966) {
  btn.style.display = "";
  list.style.display = "none";
} else {
  btn.style.display = "none";
}

// Dark Mode
const mbtogglenav = document.getElementById("toggle-dark-mb");
const togglenav = document.getElementById("nav-dark");
// let hr = document.getElementsByTagName("hr");

function mbtheme() {
  if (document.body.classList.contains("dark") == false) {
    document.body.classList.toggle("dark");
    mbtogglenav.classList.remove("bg-primary");
    mbtogglenav.classList.add("bg-dark");
    togglenav.classList.remove("bg-primary");
    togglenav.classList.add("bg-dark");
    document.body.style.backgroundColor = "#19376D";
  } else {
    document.body.classList.remove("dark")
    mbtogglenav.classList.add("bg-primary");
    mbtogglenav.classList.remove("bg-dark");
    togglenav.classList.add("bg-primary");
    togglenav.classList.remove("bg-dark");
    document.body.style.backgroundColor = "";
  }
}
