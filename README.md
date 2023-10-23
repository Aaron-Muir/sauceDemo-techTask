 ## Description

This is a brief automation Proof of Concept intending to cover three main pieces of functionality on the SauceDemo test site.  These have been chosen taking into consideration the user credentials provided as well as the functionality of the site as an e-commerce platform. 

This framework is made using Javascript and Playwright which have been chosen for their ease of use and solid documentation. 

## Getting Started

### Dependencies

This framework was built on the most up-to-date version of Playwright therefore requires the following dependencies or above: 
- Node.js 16+
- Windows 10+
- MacOS 12 Monterey or MacOS 13 Ventura
- Debian 11, Debian 12, Ubuntu 20.04 or Ubuntu 22.04.


### Installing

Getting the repo up and running is as easy as running `npm install` in the root directory.

### Executing program

Below are several commands to help you run the tests in this suite. 

- `npx playwright test` runs all tests
- `npx playwright test tests/user-login.spec.ts` runs a specific test file
- `npx playwright test --headed` runs the tests in a headed browser
- `npx playwright test --debug` runs all tests in debug mode to go through step-by-step

`npx playwright show-report` can also be used after a test run in order to see the generated report.

## Help

Up to data Playwright documentation can be found [here](https://playwright.dev/docs/intro) as well as their GitHub issues page being found [here](https://github.com/microsoft/playwright/issues). 
