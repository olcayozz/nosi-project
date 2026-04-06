document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimations();
    initCounterAnimation();
    initFormValidation();
});

function initMobileMenu() {
    const toggle = document.querySelector('.mobile-toggle');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        nav.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            nav.classList.remove('active');
        });
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-card, .stat-item, .info-item').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    let animated = false;

    const animateCounters = () => {
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += step;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };

            updateCounter();
        });
    };

    const statsSection = document.querySelector('.stats');
    if (!statsSection) return;

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !animated) {
            animated = true;
            animateCounters();
        }
    }, { threshold: 0.5 });

    observer.observe(statsSection);
}

function initFormValidation() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let isValid = true;
        const formGroups = form.querySelectorAll('.form-group');

        formGroups.forEach(group => {
            const input = group.querySelector('input, textarea');
            if (input && input.hasAttribute('required')) {
                if (!input.value.trim()) {
                    group.classList.add('has-error');
                    input.classList.add('error');
                    isValid = false;
                } else if (input.type === 'email' && !isValidEmail(input.value)) {
                    group.classList.add('has-error');
                    input.classList.add('error');
                    isValid = false;
                } else {
                    group.classList.remove('has-error');
                    input.classList.remove('error');
                }
            }
        });

        if (isValid) {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            console.log('Form submitted:', data);
            alert('Mesajınız başarıyla gönderildi!');
            form.reset();
        }
    });

    form.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('input', () => {
            const group = input.closest('.form-group');
            group.classList.remove('has-error');
            input.classList.remove('error');
        });
    });
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
