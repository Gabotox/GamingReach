let slider = document.querySelector('.contenedor-slider');
let sliderInd = document.querySelectorAll('.slider');
let contador = 1;
let tamañoWidth = sliderInd[0].clientWidth;
let intervalo = 8000;


window.addEventListener("resize", function(){
    tamañoWidth = sliderInd[0].clientWidth;
})

setInterval(function tiempo(){
            slides();
}, intervalo);


slides();

function slides() {
    slider.style.transform = 'translate('+ (- tamañoWidth * contador) + 'px)';
    slider.style.transition = 'transform 1s';
    contador++;

            if(contador === sliderInd.length){
                contador=0;

                setTimeout(function(){
                    slider.style.transform = 'translate(0px)';

                    slider.style.transition = 'transform 1s';    
                }, intervalo)
            }
}



window.addEventListener("scroll", function(){
    var header = document.getElementById("bajar");

    header.classList.toggle("abajo-s", window.scrollY>0);
});





let boton = document.getElementById("boton");
boton.addEventListener("click", mostrar_menu);

let menuabajo = document.getElementById("menuabajo");
menuabajo.addEventListener("click", ocultar_menu);

let items = document.querySelectorAll(".item");
items.forEach((item)=>{
    item.addEventListener("click", desaparecer);
}) 




nav = document.getElementById("nav");



function mostrar_menu(){
    nav.style.left = "0px";       
    menuabajo.style.display = "block";
}
function ocultar_menu(){
    nav.style.left = "-70%";       
    menuabajo.style.display = "none";
}
function desaparecer(){
    nav.style.left = "-70%";       
    menuabajo.style.display = "none";
}





