var light = document.getElementById("light");
var dark = document.getElementById("dark");
var element = document.body;

light.onclick = function (){
    if (document.getElementById("theme-light").checked) {
        element.classList.toggle("light");
      } else{
        element.classList.remove("light");
    }
}

dark.onclick = function (){
    if (document.getElementById("theme-light").checked) {
        element.classList.toggle("light");
      } else{
        element.classList.remove("light");
    }
}

var scroll = document.getElementById("scroll");
var condensed = document.getElementById("condensed");
var menu = document.getElementById("menu-lat");

scroll.onclick = function (){
  if (document.getElementById("menu-condensed").checked) {
      menu.classList.toggle("condesed-menu");
    } else{
      menu.classList.remove("condesed-menu");
  }
}

condensed.onclick = function (){
  if (document.getElementById("menu-condensed").checked) {
      menu.classList.toggle("condesed-menu");
    } else{
      menu.classList.remove("condesed-menu");
  }
}

var defaultTheme = document.getElementById("default-theme");
defaultTheme.onclick = function (){
  element.classList.remove("light");
  menu.classList.remove("condesed-menu");
}