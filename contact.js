// contact.js (updated)
async function validateForm(event) {
    event.preventDefault();
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('form-message');
    const loadingSpinner = document.getElementById('form-loading');

    // Clear previous messages
    formMessage.textContent = "";
    formMessage.style.color = "";

    // Show loading state
    loadingSpinner.style.display = 'block';

    try {
        // Validate fields
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showError('email', 'Please enter a valid email address');
            return false;
        }

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Show success state
        formMessage.textContent = "Thank you for contacting us. We will respond within 24 hours.";
        formMessage.style.color = "var(--secondary-color)";
        form.reset();

        // Add success animation
        form.classList.add('success');
        setTimeout(() => form.classList.remove('success'), 2000);

    } catch (error) {
        formMessage.textContent = "There was an error submitting your message. Please try again.";
        formMessage.style.color = "red";
    } finally {
        loadingSpinner.style.display = 'none';
    }
    return false;
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(`${fieldId}-error`);
    errorElement.textContent = message;
    errorElement.classList.add('active');
    field.focus();
}