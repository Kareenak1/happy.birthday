const confettiContainer = document.querySelector('.container');
const confettiButton = document.querySelector('.confetti');

confettiButton.addEventListener('click', () => {
    confettiContainer.classList.add('confetti-active'); /* Activate confetti animation */
});
