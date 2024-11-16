// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinksLeft = document.querySelector('.nav-links.left');
    const navLinksRight = document.querySelector('.nav-links.right');
    const navLinkItems = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinksLeft.classList.toggle('active');
        navLinksRight.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinksLeft.classList.contains('active') || navLinksRight.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinksLeft.classList.remove('active');
                navLinksRight.classList.remove('active');
            }
        });
    });

    // Sticky Navigation Header
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth Scroll for Navigation Links
    const navLinksArray = document.querySelectorAll('.nav-link');

    navLinksArray.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - header.offsetHeight,
                behavior: 'smooth'
            });
        });
    });

    // Form Submission Handling - Redirect to WhatsApp
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validate form inputs
        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Construct WhatsApp message
        const whatsappMessage = `Hello Harsh,%0A%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(message)}`;

        // WhatsApp API URL
        const whatsappURL = `https://wa.me/919574288197?text=${whatsappMessage}`;

        // Redirect to WhatsApp
        window.open(whatsappURL, '_blank');

        // Reset the form
        contactForm.reset();
    });
});
