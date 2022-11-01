let btn = document.getElementById("btn-menu");
let menu = document.getElementById("menu");
let btnClose = document.getElementById("btn-menu-close")

btn.onclick = function (){
    menu.style.left="0";
}

btnClose.onclick = function(){
    menu.style.left="-250px"
}