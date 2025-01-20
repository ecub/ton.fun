// Initialize Lucide icons
lucide.createIcons({
    attrs: {
        'stroke-width': 1.5
    }
});

// Smooth scroll functionality
document.querySelector('.scroll-button').addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

// Optional: Add animation on scroll
const cards = document.querySelectorAll('.mission-card, .fight-item');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});