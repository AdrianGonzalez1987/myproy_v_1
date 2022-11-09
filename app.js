//addEventListener("DOMContentLoaded", () => {
//    const btn_menu = document.querySelector(".btn_menu")
//    if (btn_menu) {
//        btn_menu.addEventListener("click", () => {
//            const menu-header = document.querySelector("lista-navegacion")
//            lista-navegacion.classList.toggle("cel")
//        })
 //   }
//})

$(document).ready(main);

var contador = 1;

function main(){
    $('.btn_menu').click(function(){
        if(contador == 1){
            $('.lista-navegacion').animate({
                letf: '0'
            });
            contador = 0;
        } else {
            contador = 1;
            $('.lista-navegacion').animate({
                letf: '-100%'
            });
        }
    });
}