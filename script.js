// Smooth scrolling for navigation links - exclude download links
document.querySelectorAll('.nav-link:not(.download-cv)').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
        });
        
        // Update active nav link
        document.querySelectorAll('.nav-link:not(.download-cv)').forEach(navLink => {
            navLink.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Update active nav link on scroll - exclude download links
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link:not(.download-cv)');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 100) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// Animate skill bars when they come into view
const skillBars = document.querySelectorAll('.skill-level');

function animateSkillBars() {
    skillBars.forEach(bar => {
        const skill = bar.parentElement.parentElement;
        const level = skill.getAttribute('data-level');
        
        const rect = skill.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;
        
        if (isInViewport && !bar.classList.contains('animated')) {
            bar.style.width = `${level}%`;
            bar.classList.add('animated');
        }
    });
}

// Initial check and on scroll
window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);

// Back to top button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// WhatsApp button functionality
const whatsappButton = document.getElementById('whatsapp-button');
const whatsappNumber = '+27765202303'; // Your WhatsApp number
const defaultMessage = 'Hello Christo! I came across your web CV and would like to connect with you.';

whatsappButton.addEventListener('click', function() {
    // Format the number (remove + and spaces for WhatsApp URL)
    const formattedNumber = whatsappNumber.replace(/[\s+]/g, '');
    
    // Create WhatsApp URL with pre-filled message
    const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodeURIComponent(defaultMessage)}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
});

// Optional: Add hover tooltip
whatsappButton.addEventListener('mouseenter', function() {
    // Create tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'whatsapp-tooltip';
    tooltip.textContent = 'Chat on WhatsApp';
    tooltip.style.cssText = `
        position: absolute;
        bottom: 100%;
        right: 0;
        background: #333;
        color: white;
        padding: 0.5rem 0.75rem;
        border-radius: 4px;
        font-size: 0.8rem;
        white-space: nowrap;
        margin-bottom: 0.5rem;
        z-index: 100;
    `;
    
    // Add arrow to tooltip
    const arrow = document.createElement('div');
    arrow.style.cssText = `
        position: absolute;
        top: 100%;
        right: 1rem;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid #333;
    `;
    
    tooltip.appendChild(arrow);
    this.appendChild(tooltip);
});

whatsappButton.addEventListener('mouseleave', function() {
    const tooltip = this.querySelector('.whatsapp-tooltip');
    if (tooltip) {
        tooltip.remove();
    }
});

backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Contact form handling
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simple validation
    if (!name || !email || !message) {
        showFormMessage('Please fill in all fields.', 'error');
        return;
    }
    
    // Simulate form submission
    showFormMessage('Thank you for your message! I will get back to you soon.', 'success');
    contactForm.reset();
});

function showFormMessage(text, type) {
    formMessage.textContent = text;
    formMessage.className = `form-message ${type}`;
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}



// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    addPrintButton();
    
    // Add print styles
    const printStyles = `
        @media print {
            .main-nav, .back-to-top, button {
                display: none !important;
            }
            
            .section {
                box-shadow: none;
                margin: 1rem 0;
            }
            
            header {
                background: #2c3e50 !important;
            }
        }
    `;
	
// Contact form handling
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('body'); // Note: changed from 'message' to 'body'
    
    // Simple validation
    if (!name || !email || !message) {
        showFormMessage('Please fill in all fields.', 'error');
        return;
    }
    
    // Construct mailto URL
    const subject = "Contact from CV Website";
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    const mailtoUrl = `mailto:meiring.cw@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open default email client
    window.location.href = mailtoUrl;
    
    // Show success message
    showFormMessage('Opening your email client... Please send the pre-filled email.', 'success');
    contactForm.reset();
});

function showFormMessage(text, type) {
    formMessage.textContent = text;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}	

    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = printStyles;
    document.head.appendChild(styleSheet);
});