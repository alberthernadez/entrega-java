const CAROUSEL_ENTRADA = document.querySelector(".carousel-entrada");
const CAROUSEL_ITEM = document.querySelectorAll(".carousel-item");
const CAROUSEL_PREV = document.getElementById("carousel-prev");
const CAROUSEL_NEXT = document.getElementById("carousel-next");

let contador = 0;

console.log(CAROUSEL_ITEM)
CAROUSEL_PREV.addEventListener("click", ()=>{
    contador--;
    if(contador < 0){
        contador = CAROUSEL_ITEM.length - 1;
    }
    carouselActualizacion();

})

CAROUSEL_NEXT.addEventListener("click", ()=>{
    contador++;
    if(contador >= CAROUSEL_ITEM.length){
        contador = 0;
    }
    carouselActualizacion();
    
});

function carouselActualizacion(){
    CAROUSEL_ITEM.forEach((item, index)=>{
        item.classList.remove('active');
        if(index === contador){
            item.classList.add('active');
        }
    });
}

carouselActualizacion();

let display = document.getElementById('display');

function clearDisplay() {
    display.innerText = '0';
}

function appendToDisplay(value) {
    if (display.innerText === '0' && value !== '.') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function calculate() {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = 'Error';
    }
}
