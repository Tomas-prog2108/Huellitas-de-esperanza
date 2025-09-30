let currentSlide = 0;
// Actualizar referencias después de cambios de DOM
const slides = document.querySelectorAll('.Carrusel-slide');
const indicators = document.querySelectorAll('.Indicador');
const totalSlides = slides.length;
const carousel = document.getElementById('Carrusel');

function updateCarousel() {
    // Mover el carrusel
    const offset = -currentSlide * 100;
    carousel.style.transform = `translateX(${offset}%)`;
            
    // Actualizar indicadores
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
            
    // Actualizar slides activos
     slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
    });
}

function moveSlide(direction) {
    currentSlide += direction;
            
    // Loop infinito
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
            
    updateCarousel();
}

function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateCarousel();
}

// Auto-play funcionalidad
let autoPlayInterval;
        
function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        moveSlide(1);
    }, 4000);
}
        
function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

// Eventos para pausar/reanudar auto-play
const carouselContainer = document.querySelector('.Contenedor-carrusel');
carouselContainer.addEventListener('mouseenter', stopAutoPlay);
carouselContainer.addEventListener('mouseleave', startAutoPlay);

// Soporte para navegación con teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        moveSlide(-1);
    } else if (e.key === 'ArrowRight') {
        moveSlide(1);
    }
});

// Soporte táctil básico
let startX = 0;
let endX = 0;

carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
            
    if (Math.abs(diff) > 50) { // Mínimo 50px para considerar swipe
        if (diff > 0) {
            moveSlide(1); // Swipe izquierda = siguiente
        } else {
            moveSlide(-1); // Swipe derecha = anterior
        }
    }
});

// Inicializar auto-play
startAutoPlay();

// Inicializar carrusel
updateCarousel()