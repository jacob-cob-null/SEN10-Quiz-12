const fishFacts = [
  "Parrotfish help create tropical beach sand by breaking down coral as they feed.",
  "Clownfish find shelter among the stinging tentacles of sea anemones.",
  "Male seahorses carry developing young in a brood pouch.",
];

function showRandomFishFact() {
  const factIndex = Math.floor(Math.random() * fishFacts.length);
  const fact = fishFacts[factIndex];
  document.querySelector("#fish-fact").textContent = fact;
  return fact;
}

// index.html loads this script with defer, so the page elements are ready.
showRandomFishFact();

const tideButton = document.querySelector("#tide-button");

tideButton.addEventListener("click", () => {
  const isNight = document.body.classList.toggle("night");
  tideButton.setAttribute("aria-pressed", String(isNight));
  tideButton.textContent = isNight ? "Return to daylight" : "Change the tide";
});

// Allow Jest to test the same function that runs in the browser.
if (typeof module !== "undefined") {
  module.exports = { showRandomFishFact };
}
