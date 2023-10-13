// script.js

const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('success-message');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Perform form validation here (you can add more complex validation logic if needed)

    // For simplicity, this example considers the form as valid if all fields are filled
    const inputs = Array.from(contactForm.elements).filter(element => element.tagName === 'INPUT');
    const isValid = inputs.every(input => input.value.trim() !== '');

    if (isValid) {
        // Simulate sending data to the server (you can replace this with an actual API call)
        setTimeout(() => {
            // Show success message and hide the form
            successMessage.classList.remove('hidden');
            contactForm.classList.add('hidden');
        }, 1000); // Simulate a delay for the API call
    }
});

