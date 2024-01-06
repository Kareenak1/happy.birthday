const typingEffect = document.querySelector('.typing-effect');
const text = `On your birthday, I want to celebrate the exceptional woman you are. 
 Thank you for your endless support,for the wisdom you share so freely, 
and for the unwavering belief you have in me.You've nurtured my dreams, 
and inspired me to be the best version of myself.  
I know I don't say it enough, but I appreciate you beyond measure.
I hope your birthday is filled with joy, laughter, and everything that brings you happiness. 
May this year be one of abundant blessings, good health, and cherished memories!`;
let index = 0;

const typeWriter = () => {
  typingEffect.textContent = text.slice(0, index);
  index++;
  if (index < text.length) {
    requestAnimationFrame(typeWriter);
  }
};

typeWriter();

const confettiContainer = document.querySelector('.container');
const confettiButton = document.querySelector('.confetti');

confettiButton.addEventListener('click', () => {
    confettiContainer.classList.add('confetti-active'); /* Activate confetti animation */
});
// Create a function to generate a confetti ball
function createConfetti() {
    const confettiDiv = document.createElement('div');
    confettiDiv.classList.add('confetti');
  
    // Randomize confetti appearance
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    const size = Math.random() * 10 + 5; // Size between 5 and 15 pixels
    const shape = Math.random() < 0.5 ? 'circle' : 'square';
    const color = colors[Math.floor(Math.random() * colors.length)];
  
    confettiDiv.style.width = `${size}px`;
    confettiDiv.style.height = `${size}px`;
    confettiDiv.style.backgroundColor = color;
    confettiDiv.style.borderRadius = shape === 'circle' ? '50%' : '0';
  
    // Position and animate the confetti
    const container = document.querySelector('.container'); // Assuming a container element
    container.appendChild(confettiDiv);
  
    confettiDiv.style.position = 'absolute';
    confettiDiv.style.top = Math.random() * container.offsetHeight + 'px';
    confettiDiv.style.left = Math.random() * container.offsetWidth + 'px';
  
    const angle = Math.random() * 360;
    const speed = Math.random() * 5 + 5; // Speed between 5 and 10 pixels per frame
  
    confettiDiv.style.transform = `rotate(${angle}deg)`;
  
    animateConfetti(confettiDiv, angle, speed);
  }
  
  // Function to animate the confetti
  function animateConfetti(confettiDiv, angle, speed) {
    requestAnimationFrame(() => {
      const top = confettiDiv.offsetTop + Math.sin(angle * Math.PI / 180) * speed;
      const left = confettiDiv.offsetLeft + Math.cos(angle * Math.PI / 180) * speed;
  
      confettiDiv.style.top = `${top}px`;
      confettiDiv.style.left = `${left}px`;
  
      if (top < 0 || top > container.offsetHeight || left < 0 || left > container.offsetWidth) {
        confettiDiv.remove();
      } else {
        animateConfetti(confettiDiv, angle, speed);
      }
    });
  }
  
  // Trigger confetti throw
  function throwConfetti() {
    for (let i = 0; i < 50; i++) { // Adjust the number of confetti balls
      createConfetti();
    }
  }
  
  // Call the confetti throw function when needed (e.g., on button click)
  throwConfetti();
  