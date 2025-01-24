document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Tack för ditt meddelande!');
    });

    const footer = document.querySelector('footer');
    const thankYouMessage = document.createElement('p'); 
    thankYouMessage.textContent = "Tack för att du besökte min sida!"; 
    thankYouMessage.style.fontSize = "1rem";
    thankYouMessage.style.marginTop = "1rem";
    footer.appendChild(thankYouMessage); 
});

