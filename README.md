# Cycalona Villani | Developer Portfolio

My personal portfolio, built with React, TypeScript, and Vite.
It showcases my software development work, testing experience,
and technical delivery skills.

**[View Live Portfolio](https://cycalona-villani.github.io/cycalona-portfolio/)**

## Features

- Featured Provider Verification System project
- Links to live demos and source code
- Skills and professional background
- PDF résumé
- Cypress and Jenkins testing evidence
- Email contact link

## Technology

- React
- TypeScript
- Vite
- CSS
- Cypress
- Jenkins
- JUnit test reporting
- GitHub Pages hosting

## Featured Project: Provider Verification System

A React and TypeScript application demonstrating provider
verification and approval safeguards.

Features include:

- Approval blocked until verification requirements are met
- Manual identity review
- Expired license blocking
- Recovery from simulated service outages
- Cypress tests and Jenkins test reporting

[Live Demo](https://cycalona-villani.github.io/provider-verification-system/)

[Source Code](https://github.com/Cycalona-villani/provider-verification-system)

## Portfolio Testing

The portfolio has its own Cypress test suite, separate from
the Provider Verification System tests.

Four automated tests check:

1. Homepage heading and branding
2. Navigation to the projects section
3. Demo and source code link addresses
4. Contact navigation and email link at a phone-sized viewport

The phone-sized test checks the contact workflow; it does
not represent full mobile device or browser coverage.

## Jenkins Pipeline

The Jenkins pipeline is defined in `Jenkinsfile` and:

1. Installs dependencies with `npm ci`
2. Builds the portfolio with `npm run build`
3. Starts a local server and runs Cypress tests
4. Publishes JUnit XML test reports

The pipeline validates the project. GitHub Pages deployment
is managed separately.

## Run Locally

Install dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Open the Local URL printed in the terminal.

## Run Tests

Start a temporary server and run Cypress automatically:

```bash
npm run test:e2e
```

This command uses port 5180 and stops the server after testing.

To use the interactive Cypress runner:

```bash
npm run dev -- --port 5176 --strictPort
```

In a second terminal:

```bash
npm run cy:open
```

The interactive configuration expects the app on port 5176.
Select E2E Testing, choose a browser, and open `portfolio.cy.ts`.

JUnit XML reports are written to `test-results/`.

## Build

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Contact

**Cycalona Villani**

[Portfolio](https://cycalona-villani.github.io/cycalona-portfolio/)

[GitHub](https://github.com/Cycalona-villani)

[Email](mailto:clonievillani@gmail.com)