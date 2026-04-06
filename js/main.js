document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    if (menuToggle && navList) {
        menuToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
            this.classList.toggle('active');
        });
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }

    const statNumbers = document.querySelectorAll('.stat-number');
    let statsAnimated = false;
    
    function animateStats() {
        if (statsAnimated) return;
        
        const statsSection = document.getElementById('stats');
        const rect = statsSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight - 100) {
            statsAnimated = true;
            
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;
                
                const updateCounter = () => {
                    current += step;
                    if (current < target) {
                        stat.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        stat.textContent = target;
                    }
                };
                
                updateCounter();
            });
        }
    }
    
    window.addEventListener('scroll', animateStats);
    animateStats();

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
            
            if (!name.value.trim()) {
                document.getElementById('name-error').textContent = 'Lütfen adınızı girin';
                isValid = false;
            }
            
            if (!email.value.trim()) {
                document.getElementById('email-error').textContent = 'Lütfen e-posta adresinizi girin';
                isValid = false;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
                document.getElementById('email-error').textContent = 'Geçerli bir e-posta adresi girin';
                isValid = false;
            }
            
            if (!message.value.trim()) {
                document.getElementById('message-error').textContent = 'Lütfen mesajınızı girin';
                isValid = false;
            }
            
            if (isValid) {
                const formData = {
                    name: name.value,
                    email: email.value,
                    company: document.getElementById('company').value,
                    message: message.value
                };
                
                console.log('Form submitted:', formData);
                alert('Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.');
                this.reset();
            }
        });
    }

    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(13, 13, 13, 0.95)';
        } else {
            header.style.background = 'rgba(13, 13, 13, 0.9)';
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});