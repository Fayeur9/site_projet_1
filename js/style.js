const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

// Compteur
let counter = 0;
const size = carouselImages[0].clientWidth;

// Positionner l'image initiale
carouselSlide.style.transform = `translateX(${-size * counter}px)`;

// Boutons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Bouton suivant
nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return; // Empêche de dépasser le dernier élément
    counter++;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});

// Bouton précédent
prevBtn.addEventListener('click', () => {
    if (counter <= 0) return; // Empêche de dépasser le premier élément
    counter--;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});
