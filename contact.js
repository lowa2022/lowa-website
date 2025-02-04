document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');  // Make sure you're selecting the correct form

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const subject = document.querySelector('#subject').value;
        const message = document.querySelector('#message').value;

        // Show loading spinner
        const submitButton = document.querySelector('#submit-button');
        submitButton.disabled = true;
        submitButton.innerText = 'Sending...';

        try {
            const response = await fetch('http://localhost:3000/send-message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, subject, message })
            });

            const result = await response.json();

            if (response.ok) {
                // Show success message
                alert(result.message);
            } else {
                // Show error message
                alert(result.message);
            }
        } catch (error) {
            // Handle network error
            alert('There was an error sending the message.');
        } finally {
            // Reset form and button
            submitButton.disabled = false;
            submitButton.innerText = 'Send Message';
        }
    });
});
