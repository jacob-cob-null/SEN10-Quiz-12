const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");

const root = path.join(__dirname, "..");
const scriptPath = path.join(root, "script.js");
const original = fs.readFileSync(scriptPath, "utf8");
const broken = original.replace(
  "Math.floor(Math.random() * fishFacts.length)",
  "Math.ceil(Math.random() * fishFacts.length)"
);
const evidencePath = path.join(root, "docs", "test-evidence");

if (broken === original) {
  throw new Error("Could not locate the random selection expression for the demonstration.");
}

fs.mkdirSync(evidencePath, { recursive: true });

function runJest(label) {
  const result = spawnSync(process.execPath, [
    require.resolve("jest/bin/jest"), "--runInBand", "--no-colors",
  ], { cwd: root, encoding: "utf8" });
  if (result.error) {
    throw result.error;
  }
  const output = `${label} DEMONSTRATION\nCommand: npm test -- --no-colors\nExit code: ${result.status}\n\n${result.stdout}${result.stderr}`;
  console.log(output);
  fs.writeFileSync(path.join(evidencePath, `${label}.txt`), output);
  return result.status;
}

let failingStatus;
try {
  // Introduce a real selection bug: rounding up can skip facts or exceed the array.
  fs.writeFileSync(scriptPath, broken);
  failingStatus = runJest("FAILING");
} finally {
  // Always restore the original bytes, even when Jest cannot start.
  fs.writeFileSync(scriptPath, original);
}

const passingStatus = runJest("PASSING");
if (failingStatus !== 1 || passingStatus !== 0) {
  throw new Error("Expected FAILING exit code 1 followed by PASSING exit code 0.");
}
console.log("Demonstration complete: FAILING reproduced, source restored, PASSING confirmed.");
