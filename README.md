<div align="center">

# 🧪🧪 ShopLabs QA Suite

**End-to-end test automation suite for [shop.qaautomationlabs.com](https://shop.qaautomationlabs.com/index.php)**
Built with Cypress · Page Object Model · Allure Reporting · GitHub Actions

[![Cypress](https://img.shields.io/badge/tested%20with-Cypress-04C38E?logo=cypress&logoColor=white)](https://www.cypress.io/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Allure Report](https://img.shields.io/badge/reporting-Allure-FF6E00)](https://allurereport.org/)
[![GitHub Actions](https://img.shields.io/badge/CI-GitHub%20Actions-2088FF?logo=githubactions&logoColor=white)](https://github.com/features/actions)

</div>

---

## 📖 Overview

This is a capstone project demonstrating a professional Cypress test automation framework built around the **Page Object Model (POM)** design pattern. It covers core end-to-end user flows  homepage, login, and shopping/checkout  on a live demo storefront, with:

- Reusable, maintainable page objects
- Continuous Integration via **GitHub Actions**
- Automated **Allure reporting** on every run
- Documented test cases and capstone project write-up included in the repo

**Application Under Test:** [https://shop.qaautomationlabs.com/index.php](https://shop.qaautomationlabs.com/index.php)

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| [Cypress](https://www.cypress.io/) | End-to-end test execution |
| JavaScript | Test & page object logic |
| Page Object Model (POM) | Test architecture / design pattern |
| [Allure Report](https://allurereport.org/) | Test reporting & result visualization |
| GitHub Actions | CI — runs the suite automatically |

---

## 📁 Project Structure

```
Cypress--Capstone-Project-Using-POM-design-/
│
├── .github/
│   └── workflows/              # GitHub Actions CI pipeline
│
├── allure-report/              # Generated Allure test reports
│
├── capstone Project Document/  # Project documentation & test case specs
│   ├── Capstone Project (Using Page Object Model).pdf
│   ├── HomePage Functionality Testcase.xlsx
│   ├── Login Functionality textcases.xlsx
│   └── Shopping Category Testcase.xlsx
│
├── cypress/
│   ├── e2e/
│   │   ├── homepage.cy.js      # Homepage functionality tests
│   │   ├── login.cy.js         # Login functionality tests
│   │   └── shopping.cy.js      # Shopping/category tests
│   │
│   ├── fixtures/                # Test data (JSON)
│   ├── pages/                   # Page Object classes
│   └── support/                 # Custom commands & global config
│
├── .gitignore
├── cypress.config.js
├── package.json
└── README.md
```

---

## ✅ Test Coverage

| Spec File | Covers |
|---|---|
| `homepage.cy.js` | Homepage load, navigation, layout/element verification |
| `login.cy.js` | Login with valid/invalid credentials, empty field validation |
| `shopping.cy.js` | Browsing shopping categories, product interactions |

📄 Full manual test case documentation (with expected results) is available in **`capstone Project Document/`** as Excel test case sheets, alongside the capstone write-up PDF.

---

## ⚙️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (LTS recommended)
- npm

### Installation

```bash
git clone https://github.com/GhostX101/Cypress--Capstone-Project-Using-POM-design-.git
cd Cypress--Capstone-Project-Using-POM-design-
npm install
```

---

## ▶️ Running the Tests

**Open Cypress in interactive mode:**
```bash
npx cypress open
```

**Run the full suite headlessly:**
```bash
npx cypress run
```

**Run a single spec:**
```bash
npx cypress run --spec "cypress/e2e/login.cy.js"
```

---

## 📊 Test Reporting (Allure)

This project generates [Allure](https://allurereport.org/) reports for clear, visual test results.

```bash
# Generate the Allure report after a test run
npx allure generate allure-results --clean -o allure-report

# Open the report in your browser
npx allure open allure-report
```

---

## 🔁 Continuous Integration

Tests run automatically via **GitHub Actions** on every push, defined in `.github/workflows/`. This keeps the suite continuously validated against the live application without manual intervention.

---

## 🧱 Why Page Object Model?

Each page of the application (Home, Login, Shopping/Category) is represented as its own class in `cypress/pages/`, encapsulating that page's selectors and interactions. Test specs then call clean, readable methods instead of raw selector chains.

**Benefits:**
- 🔁 **Reusability**: shared interactions used across multiple specs
- 🛠️ **Maintainability**: a UI change only requires updating one page object, not every test
- 📖 **Readability**: tests read like plain language steps

---

## 📌 Roadmap / Future Improvements

- [ ] Expand fixture-driven test data for broader coverage
- [ ] Add API-level validation alongside UI tests
- [ ] Publish Allure reports automatically via GitHub Pages
- [ ] Add cross-browser test matrix in CI (Chrome, Firefox, Edge)

---

## 👤 Author

**GhostX101**
Capstone Project — Cypress Test Automation with Page Object Model
