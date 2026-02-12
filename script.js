// ===== SMOOTH SCROLLING =====
document.querySelectorAll('.nav-link:not(.download-cv)').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
        });
        document.querySelectorAll('.nav-link:not(.download-cv)').forEach(navLink => {
            navLink.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// ===== ACTIVE NAV LINK ON SCROLL =====
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link:not(.download-cv)');
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
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

// ===== ANIMATE SKILL BARS =====
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
window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);

// ===== BACK TO TOP =====
const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', function() {
    backToTopButton.style.display = window.pageYOffset > 300 ? 'flex' : 'none';
});
backToTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== WHATSAPP BUTTON =====
const whatsappButton = document.getElementById('whatsapp-button');
const whatsappNumber = '+27765202303';
const defaultMessage = 'Hello Christo! I came across your web CV and would like to connect with you.';
whatsappButton.addEventListener('click', function() {
    const formattedNumber = whatsappNumber.replace(/[\s+]/g, '');
    const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(whatsappUrl, '_blank');
});
// Tooltip
whatsappButton.addEventListener('mouseenter', function() {
    const tooltip = document.createElement('div');
    tooltip.className = 'whatsapp-tooltip';
    tooltip.textContent = 'Chat on WhatsApp';
    tooltip.style.cssText = `
        position: absolute; bottom: 100%; right: 0;
        background: #333; color: white; padding: 0.5rem 0.75rem;
        border-radius: 4px; font-size: 0.8rem; white-space: nowrap;
        margin-bottom: 0.5rem; z-index: 100;
    `;
    const arrow = document.createElement('div');
    arrow.style.cssText = `
        position: absolute; top: 100%; right: 1rem;
        border-left: 5px solid transparent; border-right: 5px solid transparent;
        border-top: 5px solid #333;
    `;
    tooltip.appendChild(arrow);
    this.appendChild(tooltip);
});
whatsappButton.addEventListener('mouseleave', function() {
    const tooltip = this.querySelector('.whatsapp-tooltip');
    if (tooltip) tooltip.remove();
});

// ===== CONTACT FORM – FORMSUBREE (AJAX) =====
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    // Collect form data
    const formData = new FormData(contactForm);

    // Basic validation (already covered by 'required' attributes, but double-check)
    if (!formData.get('name') || !formData.get('email') || !formData.get('message')) {
        showFormMessage('Please fill in all fields.', 'error');
        return;
    }

    // Show sending status
    showFormMessage('Sending...', 'info');
    
    try {
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            showFormMessage('Thank you! Your message has been sent.', 'success');
            contactForm.reset();
        } else {
            const data = await response.json();
            if (data.errors) {
                showFormMessage(data.errors.map(e => e.message).join(', '), 'error');
            } else {
                showFormMessage('Oops! Something went wrong. Please try again.', 'error');
            }
        }
    } catch (error) {
        showFormMessage('Network error – please check your connection.', 'error');
    }
});

// Helper to display form messages
function showFormMessage(text, type) {
    formMessage.textContent = text;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
    
    // Hide after 6 seconds (success) or keep error visible longer
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, type === 'success' ? 6000 : 8000);
}

// ===== FORM MESSAGE HELPER =====
function showFormMessage(text, type) {
    formMessage.textContent = text;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

// ===== PRINT STYLES =====
document.addEventListener('DOMContentLoaded', function() {
    const printStyles = `
        @media print {
            .main-nav, .back-to-top, .whatsapp-button, .btn {
                display: none !important;
            }
            .section {
                box-shadow: none;
                margin: 1rem 0;
            }
            header {
                background: #2c3e50 !important;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }
        }
    `;
    const styleSheet = document.createElement('style');
    styleSheet.textContent = printStyles;
    document.head.appendChild(styleSheet);
});
