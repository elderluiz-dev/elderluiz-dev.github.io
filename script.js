// Inicializar ícones
lucide.createIcons();

// Lógica simples de scroll suave (redundante pois temos scroll-smooth na tag html)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Revelar elementos ao rolar (animação básica de entrada)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
    });
}, observerOptions);

document.querySelectorAll('section > div').forEach(div => {
    div.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
    observer.observe(div);
});
