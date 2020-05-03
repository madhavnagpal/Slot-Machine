let input = document.getElementById("speed");
let slot1 = document.querySelector(".slot.one .value");
let slot2 = document.querySelector(".slot.two .value");
let slot3 = document.querySelector(".slot.three .value");
let result = document.getElementById("result");

let emojis = ["😀", "😂", "😜", "😆", "😇", "😘", "😎"];

function drawEmoji() {
  slot1.textContent = emojis[Math.floor(Math.random() * 7)];
  slot2.textContent = emojis[Math.floor(Math.random() * 7)];
  slot3.textContent = emojis[Math.floor(Math.random() * 7)];
}

let intervalId;

function updateAnimation(newSpeed) {
  if (intervalId) clearInterval(intervalId);

  intervalId = setInterval(() => {
    drawEmoji();
    if (
      slot1.textContent == slot2.textContent &&
      slot2.textContent == slot3.textContent
    ) {
      document.documentElement.style.setProperty("--speed", "infinite");
      clearInterval(intervalId);
      result.textContent = "You Won ! For Restarting Choose Speed";
    }

    counter++;
  }, 1000 / newSpeed);
}

input.onchange = (e) => {
  result.textContent = "";
  document.documentElement.style.setProperty("--speed", e.target.value);
  updateAnimation(e.target.value);
};
