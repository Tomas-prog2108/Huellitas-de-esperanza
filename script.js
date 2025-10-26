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

document.addEventListener('DOMContentLoaded', function(){

    const navbar = document.getElementById('navbar');
    const Hamburguesa = document.getElementById('Hamburguesa');
    const navLinks = document.getElementById('nav-links');
    const Links = document.querySelectorAll('.links');

    document.addEventListener('DOMContentLoaded', () => {

        const Links = document.querySelectorAll('.links');
        const currentLocation = window.location.pathname.split("/").pop();

        Links.forEach(link => {

            if(link.getAttribute("href") === currentLocation){
                link.classList.add("active");
            }
        });
    });


    function handleNavbarScroll(){
            if(window.scrollY > 100){

                navbar.style.background = 'rgba(255,255,255,0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
            }else {
                navbar.style.background = 'rgba(255,255,255,0.95)';
                navbar.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            }
    }

    window.addEventListener('scroll', () =>{
            updateActiveLinks();
            handleNavbarScroll();
    });

    Hamburguesa.addEventListener('click', () => {

            Hamburguesa.classList.toggle('active');
            navLinks.classList.toggle('active');
    });

    Links.forEach(link => {

        link.addEventListener('click', () => {

            Hamburguesa.classList.remove('active');
            navLinks.classList.remove('active');

        });

    });

    updateActiveLinks();
    handleNavbarScroll();
    

});

var copy = document.querySelector('.Slide-logos').cloneNode(true);
document.querySelector('.Logos').appendChild(copy);