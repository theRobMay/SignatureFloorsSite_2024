const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Mobile menu toggle
// const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navigation = document.querySelector('nav ul');

// mobileMenuToggle.addEventListener('click', () => {
//     navigation.classList.toggle('active');
// });

// Form submission handling
// const contactForm = document.querySelector('#contact form');

// contactForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const formData = new FormData(contactForm);
//     // Here, you can process the form data, send it to a server, or perform any other necessary actions
//     // For demonstration purposes, we'll just log the form data to the console
//     console.log(Object.fromEntries(formData));
//     // Reset the form after submission
//     contactForm.reset();
// });

// Image slider functionality (assuming you have implemented the HTML and CSS for the slider)
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentSlide = 0;

function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    slides[index].classList.add('active');
    currentSlide = index;
}

function nextSlide() {
    let nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
}

function prevSlide() {
    let prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
}
if (nextBtn){
    nextBtn.addEventListener('click', nextSlide);
}
if (prevBtn){
prevBtn.addEventListener('click', prevSlide);
}