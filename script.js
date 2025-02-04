document.getElementById('logo').addEventListener('click', function() {
    document.querySelector('.landing').style.display = 'none';
    document.getElementById('home').style.display = 'block';
});

// Highlight the active page in the navigation bar
const currentPath = window.location.pathname;
const links = document.querySelectorAll('.nav-bar a');
links.forEach(link => {
    if (link.getAttribute('href') === currentPath.split('/').pop()) {
        link.classList.add('active');
    }
});
