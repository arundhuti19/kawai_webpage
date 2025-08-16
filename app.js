// Get the image element
const image = document.getElementById("cats-img");

// Play sound on click
image.addEventListener("click", () => {
  const sound = new Audio("mmm.mp3"); // your sound file
  sound.play();
});
