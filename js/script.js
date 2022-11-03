let btn = document.getElementById("btn-menu");
let menu = document.getElementById("menu");
let btnClose = document.getElementById("btn-menu-close")

btn.onclick = function (){
    menu.style.left="0";
}

btnClose.onclick = function(){
    menu.style.left="-250px"
}


var mainImg = document.getElementById("mainImg");
var smallImg = document.getElementsByClassName("small-img");
smallImg[0].onclick = function (){
    mainImg.src = smallImg[0].src;
}
smallImg[1].onclick = function (){
    mainImg.src = smallImg[1].src;
}
smallImg[2].onclick = function (){
    mainImg.src = smallImg[2].src;
}
smallImg[3].onclick = function (){
    mainImg.src = smallImg[3].src;
}
