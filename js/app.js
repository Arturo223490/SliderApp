let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');


let carruselDom = document.querySelector('.carrusel');
let SliderDom = carruselDom.querySelector('.carrusel .list');
let thumbnailBorderDom = document.querySelector('.carrusel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carrusel .item');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutonext = 7000;

nextDom.onclick = function(){
    showSlider('next');
}

prevDom.onclick = function(){
    showSlider('prev');
}

let runTimeout;
let runNextAuto = setTimeout(()=>{
    nextDom.click();
},timeAutonext)

function showSlider(type){
    let SliderItemsDom = SliderDom.querySelectorAll('.carrusel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carrusel .thumbnail .item');

    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carruselDom.classList.add('next');
    }
    else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carruselDom.classList.add('prev');
    }
}

function showSlider(type){
    carruselDom.classList.add('prev');

    clearTimeout(runTimeout);
    runTimeout = setTimeout(()=> {
        carruselDom.classList.remove('next');
        carruselDom.classList.remove('prev');
    },timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(()=>{
        next.click();
    },timeAutonext)
}