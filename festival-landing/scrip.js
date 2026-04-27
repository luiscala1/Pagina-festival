document.addEventListener('DOMContentLoaded', function() {
    // MENÚ HAMBURGUESA: Toggle para navegación móvil
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');

    if (hamburger && navList) {
        hamburger.addEventListener('click', function() {
            navList.classList.toggle('active');
        });
    }});