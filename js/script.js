// Scroll to section function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Simple animation on scroll
document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const heroSection = document.querySelector('.hero');
    
    if (heroSection) {
        const opacity = 1 - scrollPosition / 500;
        heroSection.style.opacity = Math.max(opacity, 0);
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Any initialization code can go here
    console.log('Nosi AI Lab landing page loaded');
});