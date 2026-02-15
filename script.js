// Cute randomized reminders for the hug generator.
const hugMessages = [
  "You are my favorite person to love.",
  "I’m proud of you, always.",
  "You make the world feel lighter.",
  "I choose you in every lifetime.",
  "You’re doing amazing, my love.",
  "I’m sending you the biggest hug right now.",
  "You are my sweetest dream come true.",
];

// Random message button (Daily Reminders page).
const hugButton = document.getElementById("hug-button");
const hugMessage = document.getElementById("hug-message");

if (hugButton && hugMessage) {
  hugButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * hugMessages.length);
    hugMessage.textContent = hugMessages[randomIndex];
    hugMessage.classList.remove("pop");
    void hugMessage.offsetWidth;
    hugMessage.classList.add("pop");
  });
}

// Optional background music toggle (add your own file in HTML).
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
    if (countNumber) {
      countNumber.textContent = count;
    }
    if (count <= 0) {
      clearInterval(interval);
      countdown.classList.add("hidden");
      revealMessage.classList.remove("hidden");
    }
  }, 900);
}

// Soft entry animation for page titles.
const pageTitle = document.querySelector(".page-title");
if (pageTitle) {
  pageTitle.classList.add("fade-in");
}

// Hug redeem button functionality
const redeemButton = document.getElementById("redeem-hug");

if (redeemButton) {
  redeemButton.addEventListener("click", () => {
    // Create multiple emojis
    for (let i = 0; i < 20; i++) {
      createFloatingEmoji();
    }

    // Reveal the hug image
    const hugImage = document.getElementById("hug-image");
    if (hugImage) {
      hugImage.classList.remove("hidden");
    }
  });
}

function createFloatingEmoji() {
  const emojis = ["🫂", "🤗", "💖", "🤍", "✨", "🥰", "🎁"];
  const emoji = document.createElement("div");
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.classList.add("floating-hug");

  // Random horizontal position
  emoji.style.left = Math.random() * 100 + "vw";

  // Random animation duration and delay
  emoji.style.animationDuration = Math.random() * 3 + 2 + "s"; // 2-5s
  emoji.style.animationDelay = Math.random() * 0.5 + "s";

  document.body.appendChild(emoji);

  // Cleanup after animation
  setTimeout(() => {
    emoji.remove();
  }, 5000);
}

// Story Carousel Logic
const revealButtons = document.querySelectorAll(".reveal-btn");

revealButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const container = btn.nextElementSibling;
    if (container && container.classList.contains("carousel-container")) {
      container.classList.remove("hidden");
      btn.style.display = "none"; // Hide button after reveal
    }
  });
});

// Carousel Navigation
const carousels = document.querySelectorAll(".carousel-container");

carousels.forEach((carousel) => {
  const track = carousel.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const nextBtn = carousel.querySelector(".next");
  const prevBtn = carousel.querySelector(".prev");
  let currentIndex = 0;

  const updateSlides = (index) => {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
  };

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlides(currentIndex);
    });

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlides(currentIndex);
    });
  }
});
