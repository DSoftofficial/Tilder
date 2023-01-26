const author = "Dhrubajyoti Biswas"
const file_explorer_btn = document.querySelector("#file_explorer");
const sidebar_menu = document.querySelector(".sidebar-menu");
file_explorer_btn.addEventListener('click', () => {
    if (sidebar_menu.style.display == 'block'){
        sidebar_menu.style.display == 'flex'
    }
    else{
        sidebar_menu.style.display == 'none';
    }
})
