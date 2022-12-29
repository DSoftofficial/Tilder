const author = "Dhrubajyoti Biswas"
const file_explorer_btn = document.querySelector("#file_explorer");
const sidebar_menu = document.querySelector(".sidebar-menu");
function sidebar_menu_toggle() {
    function sidebar_menu_toggle_flex(){
        file_explorer_btn.addEventListener('click', () => {
            sidebar_menu.style = ("display:flex")
        })
    }
    file_explorer_btn.addEventListener('click', () => {
        sidebar_menu.style = ("display:none")
    })
    
   if (file_explorer_btn.style.display == "none"){
      dropdown.style.display = 'block';
    } else {
      dropdown.style.display = "none";
    }
}
