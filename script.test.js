const fs = require("node:fs");
const path = require("node:path");

const html = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");

beforeEach(() => {
  jest.resetModules();
  const page = new DOMParser().parseFromString(html, "text/html");
  document.body.innerHTML = page.body.innerHTML;
  document.body.className = "";
  document.querySelector("#fish-fact").textContent = "Waiting for a fish fact.";
});

test("displays a random fish fact automatically when the deferred page script loads", () => {
  const page = new DOMParser().parseFromString(html, "text/html");
  expect(page.querySelector("script[src='script.js']").defer).toBe(true);
  const random = jest.spyOn(Math, "random").mockReturnValue(0.5);

  require("./script.js");

  expect(random).toHaveBeenCalledTimes(1);
  expect(document.querySelector("#fish-fact").textContent).toBe(
    "Clownfish find shelter among the stinging tentacles of sea anemones."
  );
});

test.each([
  [0, "Parrotfish help create tropical beach sand by breaking down coral as they feed."],
  [0.5, "Clownfish find shelter among the stinging tentacles of sea anemones."],
  [0.999999, "Male seahorses carry developing young in a brood pouch."],
])("selects and displays the correct fact for random value %s", (randomValue, expectedFact) => {
  jest.spyOn(Math, "random").mockReturnValue(randomValue);
  const { showRandomFishFact } = require("./script.js");

  expect(showRandomFishFact()).toBe(expectedFact);
  expect(document.querySelector("#fish-fact").textContent).toBe(expectedFact);
});

test("keeps the tide button working in both directions after displaying a fact", () => {
  require("./script.js");
  const tideButton = document.querySelector("#tide-button");
  const fact = document.querySelector("#fish-fact").textContent;

  tideButton.click();
  expect(document.body.classList.contains("night")).toBe(true);
  expect(tideButton.getAttribute("aria-pressed")).toBe("true");
  expect(tideButton.textContent).toBe("Return to daylight");

  tideButton.click();
  expect(document.body.classList.contains("night")).toBe(false);
  expect(tideButton.getAttribute("aria-pressed")).toBe("false");
  expect(tideButton.textContent).toBe("Change the tide");
  expect(document.querySelector("#fish-fact").textContent).toBe(fact);
});
