const mobile_menu_btn = document.getElementById("breadcrumb-icon");
const mobile_menu = document.getElementById("mobile-menu");
const close_menu_btn = document.getElementById("close-menu-btn");


mobile_menu_btn.addEventListener("click", function(){
    mobile_menu.classList.add("visible");
})

close_menu_btn.addEventListener("click", function(){
  mobile_menu.classList.remove("visible");
})