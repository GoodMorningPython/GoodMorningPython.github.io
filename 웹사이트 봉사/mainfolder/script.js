const menu_bar = document.querySelector('#menu_bar');
const menu_page = document.querySelector('aside');
const menu_page_style = window.getComputedStyle(menu_page);

menu_bar.addEventListener('click', () => {
    if (menu_page_style.display === 'none'){
        menu_page.style.display='flex';
    }
    else if (menu_page_style.display === 'flex'){
        menu_page.style.display='none';
    }
});

window.onresize = function(event){
    var innerWidth = window.innerWidth;
    if(innerWidth > '768'){
        menu_page.style.display='none';
    }
}