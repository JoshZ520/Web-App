function changeText(id, newText, newColor) {
  const textElement = document.getElementById(id);
  textElement.textContent = newText;
  textElement.style.color = newColor;
}

setTimeout(function () {
  changeText(
    "startingText",
    "Hello There, Would you like to play a game?",
    "black"
  );
}, 10000);

setTimeout(function () {
  changeText("waitingText", "You must decide before it's too late!", "maroon");
}, 30000);
