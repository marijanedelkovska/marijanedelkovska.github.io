const carouselImages = document.querySelector('.sliki-sliki');
const images = document.querySelectorAll('.sliki-sliki img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;

function showImage() {
    if (index < 0) {
        index = images.length - 1;
    }
    if (index >= images.length) {
        index = 0;
    }
    carouselImages.style.transform = `translateX(${-index * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    index++;
    showImage();
});

prevBtn.addEventListener('click', () => {
    index--;
    showImage();
});
