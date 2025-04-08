// Initialize Lucide icons
lucide.createIcons();

// Navbar movement effect - Moves with the scroll but remains at the top
const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  let currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
    // Scrolling down → move navbar smoothly
    navbar.style.transform = `translateY(${Math.min(currentScrollY, 0)}px)`;
  } else {
    // Scrolling up → keep navbar at the top
    navbar.style.transform = 'translateY(0)';
  }

  lastScrollY = currentScrollY;
});

navbar.style.position = 'fixed';
navbar.style.top = '0';
navbar.style.left = '0';
navbar.style.width = '100%';
navbar.style.zIndex = '1000';


// Select the logo container
const mindtunesLogo = document.querySelector('.logo');

// Scroll to top when the logo is clicked
mindtunesLogo.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scrolling effect
  });
});


// Mobile menu toggle
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all sections except hero (which has its own animation)
document.querySelectorAll('.section:not(#hero)').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'all 1s ease';
  observer.observe(section);
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
  });
}

// Duplicate testimonials for infinite scroll
const testimonials = document.querySelector('.testimonials');
if (testimonials) {
  testimonials.innerHTML += testimonials.innerHTML;
}
