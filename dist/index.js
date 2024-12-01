const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

let index = 0;
const totalSlides = slide.length;

function showSlide(n) {
    // Изчислявам транслацията на проценти
    const translateX = -(n * (100 / totalSlides));
    slides.style.transform = `translateX(${translateX}%)`;
}

nextButton.addEventListener('click', (event) => {
    event.preventDefault(); // Предотвратява връщането нагоре на страницата
    index = (index + 1) % totalSlides; // Циклично преместване напред
    showSlide(index);
});

prevButton.addEventListener('click', (event) => {
    event.preventDefault(); // Предотвратява връщането нагоре на страницата
    index = (index - 1 + totalSlides) % totalSlides; // Циклично преместване назад
    showSlide(index);
});

// Автоматично сменяне на слайдовете на всеки 5 секунди
setInterval(() => {
    index = (index + 1) % totalSlides; // Циклично преместване напред
    showSlide(index);
}, 5000);

// Показване на първия слайд
showSlide(index);

document.getElementById('partner-slider').addEventListener('mouseover', function() {
    this.style.animationPlayState = 'paused';
  });
  document.getElementById('partner-slider').addEventListener('mouseout', function() {
    this.style.animationPlayState = 'running';
  });