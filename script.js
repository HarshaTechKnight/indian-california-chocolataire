document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu when a link is clicked
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                        toggle: false
                    });
                    bsCollapse.hide();
                }
                
                // Smooth scroll to target
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Update active class
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
    
    // Update active nav link on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Mobile menu dropdown animation
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarContent = document.querySelector('#navbarContent');
    
    navbarToggler.addEventListener('click', function() {
        navbarContent.classList.toggle('show');
    });
});

document.addEventListener('DOMContentLoaded', function() {
  // Filter chocolates
  const filterButtons = document.querySelectorAll('.btn-filter');
  const chocolateItems = document.querySelectorAll('#chocolate-grid > div');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Filter items
      const filterValue = button.getAttribute('data-filter');
      
      chocolateItems.forEach(item => {
        if (filterValue === 'all' || item.getAttribute('data-category').includes(filterValue)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Quick View Modal (example - would need modal HTML)
  const quickViewButtons = document.querySelectorAll('.btn-quickview');
  quickViewButtons.forEach(button => {
    button.addEventListener('click', () => {
      // In a real implementation, you'd show a modal with detailed product info
      console.log('Quick view clicked');
    });
  });
});

// Initialize Swiper
document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.testimonial-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      }
    }
  });
});

// Bootstrap 5 Tab Initialization
document.addEventListener('DOMContentLoaded', function() {
  const shopTabs = document.querySelector('#shopTabs');
  if (shopTabs) {
    shopTabs.addEventListener('click', function(e) {
      if (e.target.classList.contains('nav-link')) {
        e.preventDefault();
        new bootstrap.Tab(e.target).show();
      }
    });
  }
  
  // Quick View Modal Example
  const quickViewBtns = document.querySelectorAll('.btn-quickview');
  quickViewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // In real implementation, this would launch a modal with product details
      console.log('Quick view clicked');
    });
  });
});

// Auto-update copyright year
document.getElementById('current-year').textContent = new Date().getFullYear();