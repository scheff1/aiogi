let offset = 0;
const screenWidth = window.screen.width;
const sliderLine = document.querySelector('.sec-4__photos');

document.querySelector('.sec-4__arrow-next').addEventListener('click', function (){
    offset += 277;
    if (offset > screenWidth) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
})

document.querySelector('.sec-4__arrow-prev').addEventListener('click', function (){
    offset -= 277;
    if (offset < 0) {
        offset = screenWidth;
    }
    sliderLine.style.left = -offset + 'px';
})