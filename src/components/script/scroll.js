document.querySelectorAll('.menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const headerOffset = 100;

        if (target) {
            const targetOffset = target.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: targetOffset - headerOffset,
                behavior: 'smooth'
            });
        }
    });
});
