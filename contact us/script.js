document.addEventListener('DOMContentLoaded', () => {
    const messageArea = document.getElementById('messageArea');
    const currentChar = document.getElementById('currentChar');
    const contactForm = document.getElementById('contactForm');

    // Character Counter
    messageArea.addEventListener('input', (e) => {
        const count = e.target.value.length;
        currentChar.textContent = count;

        if (count >= 280) {
            currentChar.classList.add('text-danger');
        } else {
            currentChar.classList.remove('text-danger');
        }
    });

    // Form Submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const btn = contactForm.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;

        // Simple Loading State
        btn.disabled = true;
        btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span> Sending...';

        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-check me-2"></i> Message Sent!';
            btn.classList.replace('btn-purple', 'btn-success');

            setTimeout(() => {
                contactForm.reset();
                currentChar.textContent = '0';
                btn.disabled = false;
                btn.innerHTML = originalText;
                btn.classList.replace('btn-success', 'btn-purple');
            }, 3000);
        }, 2000);
    });
});
