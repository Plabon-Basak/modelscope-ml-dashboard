# ModelScope

ModelScope is a professional, light-themed ML Model Evaluation & Experiment Dashboard for learning, visualization, and portfolio demonstration.

## Overview

ModelScope presents a frontend-only dashboard for exploring synthetic machine-learning model results. It provides model performance summaries, interactive comparisons, evaluation visualizations, and browser-local experiment records without training models or connecting to external services.

## Features

- **Dashboard overview:** Summary metric cards, grouped model performance charts, and illustrative recent experiment activity.
- **Model comparison:** Interactive checkboxes for selecting models, a responsive comparison table with highlighted best values, and a Recharts grouped bar chart.
- **Model evaluation:** Model selection, derived metric cards, a labeled confusion matrix, a classification report, and an illustrative ROC curve.
- **Experiment management:** Create, display, and delete browser-local experiment records with validation and confirmation dialogs.
- **Settings:** Application and technology information, data privacy details, and a reset action for user-created experiment records.

## Technology Stack

- React
- Vite
- JavaScript (ES modules)
- Tailwind CSS v4
- React Router DOM
- Recharts
- Lucide React
- Browser LocalStorage

## Project Structure

```text
.
├── .github/
│   └── copilot-instructions.md
├── docs/
│   └── AI_WORKFLOW.md
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/
│   │   ├── evaluation/
│   │   │   ├── ConfusionMatrix.jsx
│   │   │   ├── MetricsTable.jsx
│   │   │   └── RocCurve.jsx
│   │   ├── DashboardLayout.jsx
│   │   ├── Header.jsx
│   │   ├── MetricCard.jsx
│   │   ├── ModelComparisonChart.jsx
│   │   ├── ModelPerformanceChart.jsx
│   │   ├── RecentExperiments.jsx
│   │   └── Sidebar.jsx
│   ├── data/
│   │   ├── sampleExperiments.js
│   │   └── sampleModels.js
│   ├── hooks/
│   │   └── useExperiments.js
│   ├── pages/
│   │   ├── Comparison.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Evaluation.jsx
│   │   ├── Experiments.jsx
│   │   └── Settings.jsx
│   ├── utils/
│   │   └── storage.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── vite.config.js
└── README.md
```

## Installation and Local Setup

### Prerequisites

- Node.js 20.19+ or Node.js 22.12+
- npm compatible with the installed Node.js version

### Clone the repository

```bash
git clone https://github.com/your-username/modelscope.git
cd modelscope
```

Replace the placeholder repository URL with the actual repository URL when it becomes available.

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will print the local URL for the running application.

### Available validation commands

```bash
npm run lint
npm run build
```

## Data Disclaimer and Limitations

- Dashboard metrics, model comparisons, confusion matrices, and evaluation results are synthetic demonstration data.
- ModelScope does not train models, evaluate uploaded datasets, or perform real-world analysis.
- ROC curves are illustrative visualizations based on synthetic values; they are not calculated from the confusion matrices.
- User-created experiments are browser-local records, not evidence of actual training runs.
- Experiment records persist only in the current browser under the `modelscope.experiments` LocalStorage key.
- The application uses no backend, database, authentication, or external API.

## AI-Assisted Development

GitHub Copilot Agent assisted with implementation of the application and documentation. The project owner manually reviewed the application in the browser and confirmed:

- Dashboard appearance and navigation.
- Model comparison interactions, including the empty-selection state.
- Evaluation model selection and visualizations.
- Experiment creation, required-name validation, persistence after refresh, and deletion.
- Settings reset behavior and preservation of the separate illustrative sample records.

These checks are manual browser verification, not automated tests, and are separate from the automated npm lint and production-build validation.

## License

No license has been specified for this project yet.
