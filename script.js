window.addEventListener('scroll', handleScroll);
document.addEventListener('DOMContentLoaded', addNavHoverEffect);

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#typed-text', {
      strings: ['Developer', 'Web Designer', 'Problem Solver'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    });
  });

function handleScroll() {
    const nav = document.getElementById('desktop-nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}

function addNavHoverEffect() {
    const navLinks = document.querySelectorAll('#desktop-nav .nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transform = 'translateY(-3px)';
        });
        link.addEventListener('mouseout', () => {
            link.style.transform = 'translateY(0)';
        });
    });
}

function toggleMobileMenu() {
    const navLinks = document.querySelector('#desktop-nav .nav-links');
    const menuIcon = document.querySelector('.menu-icon');
    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('active');
}

function toggleMobileMenu() {
    const navLinks = document.querySelector('#desktop-nav .nav-links');
    navLinks.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    if (menuIcon) {
        menuIcon.addEventListener('click', toggleMobileMenu);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMobileMenu);
    }
});