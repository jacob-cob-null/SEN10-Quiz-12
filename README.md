# For the Fishes

An ocean appreciation page celebrating the fish that keep marine ecosystems moving. The site is a static HTML/CSS/JavaScript project designed for GitHub Pages.

## Repository and deployment

- Repository: https://github.com/jacob-cob-null/SEN10-Quiz-12
- Visibility: public
- Deployment: pushes to `main` run ESLint, then Jest in a separate test job, then publish the root directory through GitHub Pages only if both jobs pass.
- Expected Pages URL: `https://jacob-cob-null.github.io/SEN10-Quiz-12/`

In the repository settings, set **Pages > Build and deployment > Source** to **GitHub Actions**. The first successful workflow run will publish the site.

## Local checks

```bash
npm ci
npm run lint
npm test -- --ci
```

The lint configuration explicitly checks required semicolons, double quotes, strict equality, unused variables, and undefined names across the JavaScript source, tests, and tooling.

## Linter demonstration

To demonstrate the quality gate, remove the semicolon from the `const tideButton` declaration in `script.js` and run `npm run lint`. ESLint reports a `semi` rule violation and the workflow's `lint` job would stop before deployment. Restore the semicolon and rerun the command to return to a passing build. The committed version is intentionally the corrected, deployable version.

## LLM prompts used

These are the prompts used in this project, kept true to the request wording.

1. **User requirements interview:**

   > Software configuration management is often associated with version control, CI/CD, and DevOps. Using your preferred LLM to assist you, create a static site (HTML/CSS/JS) hosted on GitHub Pages with a GitHub Actions workflow that automatically packages and publishes the site whenever you push to your GitHub repository (10 pts). Include an automated quality check by adding a JS linter step that runs before deployment and test it by breaking a JS rule such as omitting a required semicolon (10 pts). Submit the link to your GitHub repository (make sure it is set to public) and share all of your LLM prompts here (5 pts).

   > Assess the problem and interview me first on the requirements.

2. **Requirement answers:**

   > 1. https://github.com/jacob-cob-null/SEN10-Quiz-12.git
   > 2. appreciation page for fishes
   > 3. ocean, anything for the fishes
   > 4. Yes
   > 5. Yes, proceed with standard
   > 6. eslint shall suffice
   > 7. demonstrate only
   > 8. Yes
   > 9. Yes, organize it and keep it true to what i've typed

3. **Implementation prompt:**

   > Build the requested fish appreciation static site in the supplied empty GitHub repository. Add HTML, CSS, and JavaScript; configure ESLint; add a GitHub Actions workflow that runs lint before deploying the root directory to GitHub Pages; document the repository link, setup, linter demonstration, and the exact prompts used. Demonstrate the missing-semicolon failure locally, then restore the corrected version for deployment.

## Project files

- `index.html`: accessible site structure and fish appreciation content.
- `styles.css`: responsive visual design and interactive night-tide theme.
- `script.js`: the page-load random fish fact function and tide theme toggle.
- `script.test.js`: five Jest tests using the actual page markup in jsdom.
- `jest.config.js`: browser-like test environment.
- `scripts/demonstrate-tests.js`: reproducible FAILING and PASSING demonstration.
- `.github/workflows/deploy.yml`: lint -> test -> deploy GitHub Actions workflow.
## Jest activity: a random fish fact on page load

`showRandomFishFact()` chooses one of three fish facts and updates the hero's "A little ocean wonder" panel every time the page loads. The script uses `defer`, so the HTML is ready before the function runs. The original fish artwork, page sections, responsive design, and tide button are preserved.

The automated workflow is now **lint -> test -> deploy**. The `test` job requires `lint`; `deploy` requires both `lint` and `test`. GitHub Actions uses Node.js 22, `npm ci`, and `npm test -- --ci`.

### FAILING and PASSING tests

Run `npm run test:demo` to reproduce a real failing test run, restore the correct function, and show the passing run:

| Demonstration | Intentional implementation change | Jest result | Exit code |
| --- | --- | --- | --- |
| **FAILING** | Use `Math.ceil` instead of `Math.floor` for the random fact index | **3 failed, 2 passed** | **1** |
| **PASSING** | Restore `Math.floor` | **5 passed** | **0** |

- [Complete FAILING test output](docs/test-evidence/FAILING.txt)
- [Complete PASSING test output](docs/test-evidence/PASSING.txt)
- [Instructions and explanation](docs/TESTING.md)
- [All human LLM prompts and requirement answers for this activity](docs/LLM-PROMPTS.md)
- [GitHub Actions workflow runs](https://github.com/jacob-cob-null/SEN10-Quiz-12/actions)

The failure was demonstrated locally. Only the corrected passing version is committed for deployment.
