const tideButton = document.querySelector("#tide-button");

tideButton.addEventListener("click", () => {
  const isNight = document.body.classList.toggle("night");
  tideButton.setAttribute("aria-pressed", String(isNight));
  tideButton.textContent = isNight ? "Return to daylight" : "Change the tide";
});