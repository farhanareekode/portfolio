// Smooth scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 70, // Adjust scroll position for navbar height
            behavior: 'smooth'
        });
    });
});

function toggleMenu() {
    const navItems = document.getElementById("nav-items");
    navItems.classList.toggle("show");
}

// Close the dropdown menu when an item is selected
document.querySelectorAll('.navbar ul li a').forEach(link => {
    link.addEventListener('click', () => {
        const navItems = document.getElementById("nav-items");
        navItems.classList.remove("show");
    });
});
