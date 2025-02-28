// Minimal JavaScript for Dark Mode and Smooth Scroll
document.addEventListener('DOMContentLoaded', () => {
    const darkToggle = document.getElementById('darkToggle');
    darkToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      darkToggle.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
    });
  
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetID = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetID);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });
