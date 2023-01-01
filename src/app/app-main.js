const file_explorer_btn = document.querySelector("#file_explorer");
const sidebar_menu = document.querySelector(".sidebar-menu");
function sidebar_menu_toggle() {
  function sidebar_menu_toggle_flex() {
    sidebar_menu.style = ("display:flex")
  }
  function sidebar_menu_toggle_none() {
    sidebar_menu.style = ("display:none")
  }
  if (file_explorer_btn.style.display == "none") {
    sidebar_menu_toggle_flex()
  } else {
    sidebar_menu_toggle_none()
  }
  file_explorer_btn.addEventListener('click', ()=>{
    
  })
}