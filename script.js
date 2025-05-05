// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // ===== Event Handling Section =====
    
    // Button Click Event
    const clickButton = document.getElementById('clickButton');
    clickButton.addEventListener('click', () => {
        alert('Button clicked! 🎉');
    });

    // Hover Effect
    const hoverBox = document.getElementById('hoverBox');
    hoverBox.addEventListener('mouseenter', () => {
        hoverBox.textContent = 'Hovering! 🎈';
    });
    hoverBox.addEventListener('mouseleave', () => {
        hoverBox.textContent = 'Hover over me!';
    });

    // Keypress Detection
    const keypressInput = document.getElementById('keypressInput');
    keypressInput.addEventListener('keypress', (event) => {
        console.log('Key pressed:', event.key);
    });

    // Double Click Event
    const doubleClickBox = document.getElementById('doubleClickBox');
    doubleClickBox.addEventListener('dblclick', () => {
        doubleClickBox.style.backgroundColor = '#34a853';
        doubleClickBox.textContent = 'Surprise! 🎁';
        setTimeout(() => {
            doubleClickBox.style.backgroundColor = '#fce8e6';
            doubleClickBox.textContent = 'Double click me for a surprise!';
        }, 1000);
    });

    // ===== Interactive Elements Section =====

    // Color Change Button
    const colorChangeButton = document.getElementById('colorChangeButton');
    const colors = ['#34a853', '#ea4335', '#fbbc05', '#4285f4'];
    let colorIndex = 0;
    
    colorChangeButton.addEventListener('click', () => {
        colorIndex = (colorIndex + 1) % colors.length;
        colorChangeButton.style.backgroundColor = colors[colorIndex];
    });

    // Image Gallery
    const galleryContainer = document.querySelector('.gallery-container');
    const images = galleryContainer.querySelectorAll('img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentImageIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.style.display = i === index ? 'block' : 'none';
        });
    }

    prevBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        showImage(currentImageIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    });

    // Initialize gallery
    showImage(0);

    // Tabs
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Add active class to clicked button and corresponding pane
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // ===== Form Validation Section =====
    const form = document.getElementById('validationForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    // Real-time validation functions
    function validateUsername() {
        const errorElement = username.nextElementSibling;
        if (username.value.length < 3) {
            errorElement.textContent = 'Username must be at least 3 characters long';
            return false;
        }
        errorElement.textContent = '';
        return true;
    }

    function validateEmail() {
        const errorElement = email.nextElementSibling;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            errorElement.textContent = 'Please enter a valid email address';
            return false;
        }
        errorElement.textContent = '';
        return true;
    }

    function validatePassword() {
        const errorElement = password.nextElementSibling;
        if (password.value.length < 8) {
            errorElement.textContent = 'Password must be at least 8 characters long';
            return false;
        }
        errorElement.textContent = '';
        return true;
    }

    // Add real-time validation listeners
    username.addEventListener('input', validateUsername);
    email.addEventListener('input', validateEmail);
    password.addEventListener('input', validatePassword);

    // Form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const isUsernameValid = validateUsername();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();

        if (isUsernameValid && isEmailValid && isPasswordValid) {
            alert('Form submitted successfully! 🎉');
            form.reset();
        }
    });
});
