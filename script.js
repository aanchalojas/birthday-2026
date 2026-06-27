// ========== Single DOMContentLoaded entry point ==========
document.addEventListener("DOMContentLoaded", () => {

  // --- Homepage Slideshow Carousel (2s interval) ---
  const homeImages = document.querySelectorAll(".home-carousel-frame .home-carousel-img");
  if (homeImages.length > 0) {
    let currentHomeIndex = 0;
    setInterval(() => {
      homeImages[currentHomeIndex].classList.remove("active");
      currentHomeIndex = (currentHomeIndex + 1) % homeImages.length;
      homeImages[currentHomeIndex].classList.add("active");
    }, 2000);
  }

  // --- Story Reveal Photos Logic ---
  const revealButtons = document.querySelectorAll(".reveal-btn");
  revealButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      // Use closest to reliably find the parent .memory-reveal container
      const memoryReveal = btn.closest(".memory-reveal");
      if (!memoryReveal) return;
      const container = memoryReveal.querySelector(".story-images-container");
      if (container) {
        container.classList.remove("hidden");
        btn.style.display = "none";
      }
    });
  });

  console.log("Script initialized");
});

// ========== Standalone listeners (run after DOM parse; script is at end of body) ==========

// Cute randomized reminders for the hug generator.
const hugMessages = [
  "You are my favorite person to love.",
  "I'm proud of you, always.",
  "You make the world feel lighter.",
  "I choose you in every lifetime.",
  "You're doing amazing, my love.",
  "I'm sending you the biggest hug right now.",
  "You are my sweetest dream come true.",
];

// Send a Hug button functionality (Daily Reminders page).
const hugButton = document.getElementById("hug-button");
if (hugButton) {
  hugButton.addEventListener("click", () => {
    for (let i = 0; i < 15; i++) createFloatingEmoji();
    const email = "aanchalagnihotri30@gmail.com";
    const subject = encodeURIComponent("Virtual Hug 💞");
    const body = encodeURIComponent("I was missing you so I am sending you a virtual hug! 🫂");
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank");
  });
}

// Optional background music toggle.
const audioToggle = document.querySelector(".audio-toggle");
const audio = document.getElementById("bg-music");
if (audioToggle && audio) {
  audioToggle.addEventListener("click", () => {
    const hasSource = Boolean(audio.querySelector("source")?.getAttribute("src"));
    if (!hasSource) {
      audioToggle.textContent = "🎵 Add a song";
      return;
    }
    if (audio.paused) {
      audio.play();
      audioToggle.textContent = "🔊 Music";
      audioToggle.setAttribute("aria-pressed", "true");
    } else {
      audio.pause();
      audioToggle.textContent = "🔈 Music";
      audioToggle.setAttribute("aria-pressed", "false");
    }
  });
}

// Surprise page countdown + reveal animation.
const countdown = document.querySelector(".countdown");
const revealMessage = document.querySelector(".reveal-message");
if (countdown && revealMessage) {
  let count = 3;
  const countNumber = countdown.querySelector(".count-number");
  const interval = setInterval(() => {
    count -= 1;
    if (countNumber) countNumber.textContent = count;
    if (count <= 0) {
      clearInterval(interval);
      countdown.classList.add("hidden");
      revealMessage.classList.remove("hidden");
    }
  }, 900);
}

// Soft entry animation for page titles.
const pageTitle = document.querySelector(".page-title");
if (pageTitle) pageTitle.classList.add("fade-in");

// Hug redeem button functionality (Surprise page).
const redeemButton = document.getElementById("redeem-hug");
if (redeemButton) {
  redeemButton.addEventListener("click", () => {
    for (let i = 0; i < 20; i++) createFloatingEmoji();
    const hugImage = document.getElementById("hug-image");
    if (hugImage) hugImage.classList.remove("hidden");
  });
}

function createFloatingEmoji() {
  const emojis = ["🫂", "🤗", "💖", "🤍", "✨", "🥰", "🎁"];
  const emoji = document.createElement("div");
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.classList.add("floating-hug");
  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.animationDuration = Math.random() * 3 + 2 + "s";
  emoji.style.animationDelay = Math.random() * 0.5 + "s";
  document.body.appendChild(emoji);
  setTimeout(() => emoji.remove(), 5000);
}
