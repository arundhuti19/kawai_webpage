document.addEventListener("DOMContentLoaded", () => {
  const cat = document.getElementById("cats-img");
  const singBtn = document.querySelector(".sing-button");
  const jumpBtn = document.querySelector(".jump-button");
  const meowBtn = document.querySelector(".meow-button");

  // 🎵 Keep one audio instance for Sing
  const singSound = new Audio("sound.mp3");
  singSound.loop = true; // optional, makes it keep playing

  // 🐱 Jump button
  jumpBtn.addEventListener("click", () => {
    cat.classList.add("jump-effect");
    cat.addEventListener("animationend", () => {
      cat.classList.remove("jump-effect");
    }, { once: true });
  });

  // 🐱 Meow button
  meowBtn.addEventListener("click", () => {
    const sound = new Audio("mmm.mp3");
    sound.play().catch(err => console.log("Audio error:", err));
  });

  // 🎵 Sing button toggle
  singBtn.addEventListener("click", () => {
    if (singSound.paused) {
      singSound.play().catch(err => console.log("Audio error:", err));
    } else {
      singSound.pause();
    }
  });
});
