document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const contactForm = document.getElementById('contactForm');
    const statNumbers = document.querySelectorAll('.stat-number');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        const isActive = navLinks.classList.contains('active');
        menuToggle.setAttribute('aria-label', isActive ? 'Menüyü kapat' : 'Menüyü aç');
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    navLinks.classList.remove('active');
                }
            }
        });
    });
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const statNumber = entry.target;
                const target = parseInt(statNumber.getAttribute('data-target'));
                animateNumber(statNumber, target);
                statsObserver.unobserve(statNumber);
            }
        });
    }, observerOptions);
    
    statNumbers.forEach(function(stat) {
        statsObserver.observe(stat);
    });
    
    function animateNumber(element, target) {
        let current = 0;
        const increment = target / 50;
        const duration = 2000;
        const stepTime = duration / 50;
        
        function updateNumber() {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current);
                setTimeout(updateNumber, stepTime);
            } else {
                element.textContent = target;
            }
        }
        
        updateNumber();
    }
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());
            
            console.log('Form data:', data);
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Gönderiliyor...';
            submitBtn.disabled = true;
            
            setTimeout(function() {
                alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1000);
        });
    }
    
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.9)';
        }
        
        lastScroll = currentScroll;
    });
});
