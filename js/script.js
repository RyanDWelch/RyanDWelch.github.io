function getRandomHexColor() {
  const randomColor = Math.floor(Math.random() * 16777216);
  return `#${randomColor.toString(16).padStart(6, "0")}`;
}

function setRandomBodyBackgroundColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
}

window.addEventListener("load", setRandomBodyBackgroundColor);
