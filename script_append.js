
// Hug redeem button functionality
const redeemButton = document.getElementById("redeem-hug");

if (redeemButton) {
  redeemButton.addEventListener("click", () => {
    // Determine how many emojis to release
    const particleCount = 20; 
    
    // Spawn emojis over a short duration
    for (let i = 0; i < particleCount; i++) {
      setTimeout(() => {
        createFloatingEmoji();
      }, i * 100); // Stagger the creation
    }
  });
}

function createFloatingEmoji() {
  const emojis = ["🫂", "🤗", "💖", "🤍", "✨", "🥰"];
  const emoji = document.createElement("div");
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.classList.add("floating-hug");
  
  // Random starting position slightly constrained to button area if possible, 
  // but generally floating up from bottom/center is fine or random X.
  // The user asked for "floating on screen", usually meaning floating UP.
  
  // Let's make them appear from the button location if we can, or just random bottom.
  // Random bottom is easier and often looks "fuller".
  // But let's try to make it emanate from the button or just center screen bottom.
  
  // Position
  const startX = Math.random() * 100; // 0 to 100vw
  
  emoji.style.left = `${startX}vw`;
  emoji.style.bottom = "-50px"; // Start slightly below screen
  
  // Random size
  const size = Math.random() * 1.5 + 1; // 1rem to 2.5rem
  emoji.style.fontSize = `${size}rem`;
  
  // Random duration
  const duration = Math.random() * 3 + 2; // 2s to 5s
  emoji.style.animationDuration = `${duration}s`;
  
  document.body.appendChild(emoji);
  
  // Remove after animation
  setTimeout(() => {
    emoji.remove();
  }, duration * 1000);
}
