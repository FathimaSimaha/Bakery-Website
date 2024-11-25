//Scroll button operation
const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY> 80);
}); 

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}

const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset: true
}) 

const scrollButton = document.querySelector('.scroll');

scrollButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling
    });
});


//Items appearing format
sr.reveal ('.home-text', {delay:300});
sr.reveal ('.home-img', {delay:400});
sr.reveal ('.container', {delay:400});

sr.reveal ('.about-img', {});
sr.reveal ('.about-text', {delay:300});

sr.reveal ('.middle-text', {});
sr.reveal ('.row-btn, .product-grid', {delay:300});

sr.reveal ('.review-content, .contact', {delay:300});


//Theme changing

const toggleButton = document.getElementById('theme-toggle');
const icon = toggleButton.querySelector('i');

       // Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme') || 'dark'; // Default is dark theme
document.documentElement.setAttribute('data-theme', savedTheme);
updateIcon(savedTheme);

       // Function to update the button icon
function updateIcon(theme) {
    if (theme === 'light') {
        icon.classList.remove('bx-moon');
        icon.classList.add('bx-sun');
    } else {
        icon.classList.remove('bx-sun');
        icon.classList.add('bx-moon');
    }
}

    // Add event listener for the theme toggle button
toggleButton.addEventListener('click', () => {
    // Get the current theme
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    // Determine the new theme
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Apply the new theme
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Update the icon
    updateIcon(newTheme);
    
    // Save the new theme in localStorage
    localStorage.setItem('theme', newTheme);
});





