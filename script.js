// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileNav = document.querySelector('.mobile-nav');

mobileMenuButton.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (event) => {
  if (!event.target.closest('.mobile-menu-button') && !event.target.closest('.mobile-nav')) {
    mobileNav.classList.remove('active');
  }
});

// Add to cart functionality
const addToCartButtons = document.querySelectorAll('.btn-outline');

if (addToCartButtons.length > 0) {
  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const product = button.closest('.card');
      const productName = product.querySelector('h4').textContent;
      
      // Simple animation for button
      button.textContent = 'Added!';
      button.style.backgroundColor = '#000';
      button.style.color = '#fff';
      
      // Reset button after 2 seconds
      setTimeout(() => {
        button.textContent = 'Add to Cart';
        button.style.backgroundColor = '';
        button.style.color = '';
      }, 2000);
      
      console.log(`Added ${productName} to cart`);
    });
  });
}

// Intersection Observer for fade-in animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Add animation classes and observe elements
document.querySelectorAll('section').forEach(section => {
  section.classList.add('animate-section');
  observer.observe(section);
});

// Add animations to cards, team members, and other elements
const animateElements = document.querySelectorAll('.card, .gallery-item, .team-member, .value-card');
if (animateElements.length > 0) {
  animateElements.forEach(element => {
    element.classList.add('animate-card');
    observer.observe(element);
  });
}

// Add animation styles dynamically
const style = document.createElement('style');
style.textContent = `
  .animate-section, .animate-card {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  
  .animate-in {
    opacity: 1;
    transform: translateY(0);
  }
  
  .card, .gallery-item, .team-member, .value-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .card:hover, .gallery-item:hover, .team-member:hover, .value-card:hover {
    transform: translateY(-5px);
  }
`;
document.head.appendChild(style);
