const mobile_menu_btn = document.getElementById("breadcrumb-icon");
const mobile_menu = document.getElementById("mobile-menu");
const close_menu_btn = document.getElementById("close-menu-btn");
const menu_links = document.getElementsByClassName("menu-items");

// menu_links.map((link) => {
//   console.log(link);
// });

for (let i = 0; i < menu_links.length; i++) {
  menu_links[i].addEventListener("click", function (e) {
    mobile_menu.classList.remove("visible");
  });
}
mobile_menu_btn.addEventListener("click", function () {
  mobile_menu.classList.add("visible");
});

close_menu_btn.addEventListener("click", function () {
  mobile_menu.classList.remove("visible");
});
