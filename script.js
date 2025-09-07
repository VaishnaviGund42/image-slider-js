const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let counter = 0;

function showSlide(index) {
  if (index < 0) {
    counter = images.length - 1;
  } else if (index >= images.length) {
    counter = 0;
  } else {
    counter = index;
  }
  slides.style.transform = `translateX(${-counter * 100}%)`;
}

prevBtn.addEventListener('click', () => {
  showSlide(counter - 1);
});

nextBtn.addEventListener('click', () => {
  showSlide(counter + 1);
});

// Auto slide every 3 seconds
setInterval(() => {
  showSlide(counter + 1);
}, 3000);
