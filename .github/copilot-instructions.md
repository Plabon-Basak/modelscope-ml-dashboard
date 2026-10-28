
# ModelScope — GitHub Copilot Instructions

## Project Overview
ModelScope is a frontend-only ML Model Evaluation and Experiment Dashboard built for learning, visualization, and portfolio demonstration.

The application presents illustrative machine learning evaluation results. It does not train models or evaluate uploaded datasets.

## Technology Stack
- React with Vite
- JavaScript (ES modules)
- Tailwind CSS v4
- React Router DOM
- Recharts
- Lucide React
- Browser LocalStorage

## Design Direction
Build a professional, clean, light-themed SaaS analytics dashboard.

Color palette:
- Background: #F8FAFC
- Cards: #FFFFFF
- Sidebar: #172554
- Primary accent: #2563EB
- Main text: #0F172A
- Secondary text: #64748B
- Borders: #E2E8F0
- Success: #16A34A

Use:
- Consistent spacing and typography
- Subtle borders and shadows
- Rounded cards
- Clear information hierarchy
- Responsive layouts
- Accessible controls and readable contrast
- Professional data visualizations

Avoid:
- Excessive gradients
- Unnecessary animations
- Overcrowded layouts
- Placeholder buttons without functionality

## Core Features

1. Dashboard
   - Summary metric cards
   - Model performance comparison chart
   - Recent experiment activity

2. Model Comparison
   - Compare Logistic Regression, Random Forest, SVM, and Decision Tree
   - Display accuracy, precision, recall, F1-score, and ROC-AUC
   - Highlight metric differences clearly

3. Model Evaluation
   - Evaluation metric details
   - Confusion matrix
   - ROC curve visualization

4. Experiments
   - View saved experiments
   - Save new experiment records
   - Delete experiment records
   - Persist records using LocalStorage

5. Settings
   - Application preferences
   - Reset demo data with confirmation

## Data Integrity
- Clearly identify all built-in model metrics as synthetic demonstration data.
- Never present illustrative values as real experimental findings.
- Keep metric values internally consistent.
- Derive precision, recall, F1-score, and accuracy from confusion matrix values when appropriate.
- Do not claim that the application trains or evaluates actual ML models.

## Development Rules
- Use reusable React components.
- Keep data separate from presentation components.
- Keep LocalStorage operations in utility functions or custom hooks.
- Use React Router for navigation.
- Use semantic HTML and accessible labels.
- Avoid unnecessary dependencies.
- Do not introduce a backend, authentication, database, or external API.
- Keep the code readable and maintainable.
- Handle empty states and invalid input.
- Ensure the application works on desktop and mobile.

## Working with AI
- Implement features incrementally.
- Explain the intended changes before making large architectural changes.
- Do not overwrite working functionality unnecessarily.
- Run the production build and ESLint after meaningful implementation stages.
- Fix errors before moving to the next stage.
