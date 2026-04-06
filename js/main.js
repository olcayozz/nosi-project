document.addEventListener('DOMContentLoaded', () => {
    mobileMenu();
    scrollAnimations();
    counterAnimation();
    contactForm();
});

function mobileMenu() {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

function scrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-card').forEach(card => {
        observer.observe(card);
    });
}

function counterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    let animated = false;

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-count'));
                    animateCounter(counter, target);
                });
            }
        });
    }, { threshold: 0.5 });

    const aboutSection = document.querySelector('.about');
    if (aboutSection) {
        counterObserver.observe(aboutSection);
    }
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const duration = 2000;
    const stepTime = duration / 50;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, stepTime);
}

function contactForm() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        console.log('Form Submitted:', { name, email, message });

        alert('Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.');
        form.reset();
    });
}
