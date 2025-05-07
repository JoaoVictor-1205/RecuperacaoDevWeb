const slides = document.querySelector('.slides');
const slideImgs = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;
let total = slideImgs.length;

function showSlide(i) {
  index = (i + total) % total;
  slides.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener('click', () => showSlide(index + 1));
prevBtn.addEventListener('click', () => showSlide(index - 1));

setInterval(() => {
  showSlide(index + 1);
}, 4000); // muda automaticamente a cada 4 segundos
