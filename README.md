# README.md

## Mehrwertsteuer Calculator

This project is a simple VAT (Mehrwertsteuer) calculator implemented in JavaScript. It includes functions to calculate VAT for a given amount and to compute the gross amount including VAT. The project also includes Jest tests to ensure the functionality works as expected and a GitHub Actions workflow for automated deployment.

## Project Structure

```bash
worktest
├── src
│   └── mehrwertsteuer.js       # Contains the VAT calculation functions
├── tests
│   └── mehrwertsteuer.test.js  # Jest tests for the functions
├── package.json                # Project metadata and dependencies
├── .github
│   └── workflows
│       └── test-and-deploy.yml # GitHub Actions workflow for CI/CD
└── README.md                   # Project documentation
```

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd worktest
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the tests:

   ```bash
   npm test
   ```

## Usage

The `mehrwertsteuer.js` file exports two functions:

- `mwst(betrag, satz)`: Calculates the VAT for a given amount.
- `brutto(betragNetto, satz)`: Returns the gross amount (net amount plus VAT).

## GitHub Actions

The project includes a GitHub Actions workflow defined in `.github/workflows/test-and-deploy.yml`. This workflow will run the tests and deploy the `mehrwertsteuer.js` file to an EC2 instance only if all tests pass.

## Contribution

Feel free to submit issues or pull requests for improvements or bug fixes.
