// Smooth scroll for in-page links
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        const headerOffset = 80; // Adjust this value based on your header's height
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

function scrollToTop() {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide the "Return to Top" button based on the user's scroll position
window.addEventListener('scroll', () => {
    const returnToTopButton = document.querySelector('.return-to-top');
    if (window.scrollY > 300) {
        returnToTopButton.classList.add('show');
    } else {
        returnToTopButton.classList.remove('show');
    }
});