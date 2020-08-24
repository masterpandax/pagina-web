let slider = document.querySelector(".slider-contendor")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 3000;
let derecha = document.querySelector(".ARROW-D")
let izquierda = document.querySelector(".ARROW-I")
var item = 0;

window.addEventListener("resize",function(){
    width = sliderIndividual[0] .clientWidth;
})
setInterval(function(){
  Slides();
},intervalo);

function Slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform .8s";
    contador++;
    if(contador == sliderIndividual.length){
      setTimeout(function(){
        slider.style.transform = "translate(0px)";
        slider.style.transition = "transform .0s";
        contador=1;

      },1500)
    }
}
/*---------------------------------------------------------------------------------------------*/
izquierda.addEventListener("click",()=>{ChangeItem(1)});
derecha.addEventListener("click", ()=>{ChangeItem(2)});

function ChangeItem(n){
     if (n==1) {
       if(item==0){
        item=7;
       } else{
        item--
      }
      } else{ 
          if(item==7){
            item=0;
          } else {
            item++
          }
        }
   for (let i = 0; i < document.querySelectorAll (".item").length ; i++) {
        document.querySelectorAll(".item")[i].style.display = "none";}

        document.querySelectorAll(".item")[item].style.display = "flex";
   }

