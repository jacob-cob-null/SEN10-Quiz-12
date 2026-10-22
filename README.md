# For the Fishes

An ocean appreciation page celebrating the fish that keep marine ecosystems moving. The site is a static HTML/CSS/JavaScript project designed for GitHub Pages.

## Repository and deployment

- Repository: https://github.com/jacob-cob-null/SEN10-Quiz-12
- Visibility: public
- Deployment: pushes to `main` run the ESLint quality check first, then publish the root directory through GitHub Pages.
- Expected Pages URL: `https://jacob-cob-null.github.io/SEN10-Quiz-12/`

In the repository settings, set **Pages > Build and deployment > Source** to **GitHub Actions**. The first successful workflow run will publish the site.

## Local checks

```bash
npm install
npm run lint
```

The lint configuration explicitly checks required semicolons, double quotes, strict equality, and unused variables in `script.js`.

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
- `script.js`: the tide theme toggle.
- `.github/workflows/deploy.yml`: lint-then-deploy GitHub Actions workflow.