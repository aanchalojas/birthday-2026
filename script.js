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
