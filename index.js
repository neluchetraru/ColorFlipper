import { colors } from "./colors.js";
const color_info = document.querySelector(".main .content span");
const main = document.querySelector(".main");
var active;
var active_id;

function toggle_menu() {
  const menu = document.querySelectorAll(".header .menu a");
  active = menu[0];
  active_id = 0;
  menu[0].addEventListener("click", (e) => {
    active = menu[0];
    active_id = 0;
    menu[0].classList.add("btn-active");
    menu[1].classList.remove("btn-active");
    generate_random(active_id);
  });
  menu[1].addEventListener("click", (e) => {
    menu[1].classList.add("btn-active");
    menu[0].classList.remove("btn-active");
    active = menu[1];
    active_id = 1;
    generate_random(active_id);
  });
}

function generate_random(id) {
  if (id == 0) {
    var color = colors[Math.floor(Math.random() * colors.length)];
  } else {
    var color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
  main.style.backgroundColor = color;
  color_info.textContent = color;
}

function start_ui() {
  toggle_menu();
  generate_random(active_id);
  const generate_btn = document.querySelector(".btn-generate");
  generate_btn.addEventListener("click", (e) => {
    generate_random(active_id);
  });
}

start_ui();
