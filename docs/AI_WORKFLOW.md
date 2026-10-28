# ModelScope AI Development Workflow

## FlyRank Frontend AI Engineering — Week 3

## 1. Introduction

ModelScope is a frontend-only ML Model Evaluation & Experiment Dashboard developed as an AI-assisted engineering project for the FlyRank Frontend AI Engineering Week 3 assignment. GitHub Copilot Agent was used to implement and document the application from human-provided requirements.

The development model combined:

- Human direction and staged feature requirements.
- AI-assisted React component and page implementation.
- Human review of generated code and project instructions.
- Manual browser verification of navigation, interactions, charts, and experiment persistence by the project owner.
- Automated ESLint and Vite production-build validation at implementation stages.

Copilot Agent was instructed to inspect `.github/copilot-instructions.md` and relevant existing files before each implementation stage. The project instructions define the intended light-themed SaaS dashboard, synthetic-data policy, technology stack, responsive behavior, and frontend-only scope.

## 2. Development Workflow

### Stage 1: Project setup and application shell

The first stage established the Vite/React application structure, React Router navigation, desktop sidebar, responsive mobile navigation, and reusable layout components. The application shell introduced:

- `Sidebar.jsx`
- `Header.jsx`
- `DashboardLayout.jsx`
- Dashboard, Comparison, Evaluation, Experiments, and Settings routes.

### Stage 2: Dashboard overview

The dashboard was implemented with synthetic model data, reusable metric cards, a responsive Recharts performance chart, and illustrative recent experiment records.

### Stage 3: Model comparison

The Comparison page added all-model default selection, model checkboxes, a horizontally scrollable metric table, highest-value highlighting, a responsive grouped comparison chart, a dynamic best-model summary, and an empty state.

### Stage 4: Model evaluation

The Evaluation page added a model selector with Random Forest selected initially. It displays derived classification metrics, confusion-matrix counts, an illustrative ROC visualization with a random-classifier baseline, and a positive-class classification report.

### Stage 5: Experiment management with LocalStorage

A dedicated storage utility and `useExperiments` hook were added. The Experiments page gained form validation, browser-local persistence, record deletion with confirmation, an empty state, newest-first ordering, and synthetic accuracy from the selected model. The separate illustrative sample records remain visually distinct from saved user records.

### Stage 6: Settings and data management

The Settings page added application information, technology and privacy details, and a confirmation-based reset for only user-created experiment records. The reset uses the existing `modelscope.experiments` LocalStorage key and leaves unrelated browser storage and separate illustrative sample experiments unchanged.

### Stage 7: README documentation

The template README was replaced with project-specific documentation covering features, technology, actual project structure, setup commands, synthetic-data limitations, and AI-assisted development.

## 3. Actual AI Prompts and Task Instructions

This section distinguishes complete prompts available in the project conversation from summarized task instructions. It does not reconstruct prompts from implementation output.

### Project setup and application shell — task summary

The available instruction requested a responsive dashboard shell and navigation, a fixed-width dark-navy desktop sidebar, a mobile navigation alternative, ModelScope branding, five React Router pages, reusable `Sidebar`, `Header`, and `DashboardLayout` components, Lucide icons, and placeholder-only content. It explicitly prohibited charts, metrics, sample datasets, experiment storage, and instruction-file changes.

### Dashboard overview — task summary

The instruction requested `sampleModels.js`, a reusable `MetricCard`, four calculated summary cards, a Recharts performance chart, three illustrative experiment records, a visible synthetic-data notice, and dashboard content without changing routing or the sidebar.

### Model comparison — task summary

The instruction requested model checkboxes with all four models selected initially, a horizontally scrollable percentage table, metric-column best-value highlighting, a reusable comparison chart, dynamic best-accuracy information, and an empty state.

### Model evaluation — task summary

The instruction requested a model dropdown defaulting to Random Forest, five evaluation metrics, a labeled two-by-two confusion matrix, a reusable Recharts ROC curve with a random-classifier baseline, an illustrative classification report, and explicit synthetic-data labeling.

### Experiment Management — available task prompt

The following prompt was provided for the Experiment Management stage:

> Continue developing ModelScope. Read `.github/copilot-instructions.md` and inspect the existing project structure, especially `sampleModels.js` and `sampleExperiments.js`.
>
> ## Task 5: Implement Experiment Management
> Build a functional experiment management page using browser LocalStorage.
>
> ### 1. Storage utility
> Create `src/utils/storage.js` with safe retrieval, saving, deletion by ID, a consistent storage key, and invalid-data handling.
>
> ### 2. Custom hook
> Create `src/hooks/useExperiments.js` with initialization, `experiments`, `addExperiment`, `deleteExperiment`, immediate state updates, persistence, unique IDs, and storage-error handling.
>
> ### 3. Experiment creation
> Add a required experiment-name field, existing-model selection, optional notes, validation, success/error messages, and form reset after successful submission.
>
> ### 4. Experiment history
> Display newest experiments first with model, synthetic accuracy, creation date, status, delete confirmation, an empty state, and accessible controls. Keep sample and user-created records clearly separated.
>
> ### Constraints
> Do not modify Dashboard, Comparison, or Evaluation functionality; do not add dependencies; no backend or external API.
>
> ### Validation
> Run `npm run lint` and `npm run build`, fix errors, and report created and modified files and LocalStorage behavior.

This is an exact summary-level transcription of the available Task 5 instruction; it retains the specific requirements without adding implementation details.

### Settings — available task prompt

The following prompt was provided for the Settings stage:

> Continue developing ModelScope. First read `.github/copilot-instructions.md` and inspect the existing Settings page, experiment storage utility, custom hook, and sample data.
>
> ## Task 6: Implement Settings
> Build a lightweight Settings page showing ModelScope, the description “ML Model Evaluation & Experiment Dashboard,” the current technology stack, and version 1.0.0.
>
> Explain that dashboard metrics and evaluation results are synthetic, no model training occurs, user-created experiments are browser-local, and no backend or external API is used.
>
> Add a reset action for saved user-created experiment records. Use the existing storage utility, confirm before resetting, update the interface immediately, show success or error feedback, modify no unrelated LocalStorage keys, and preserve separate illustrative sample experiments.
>
> Validation required running `npm run lint` and `npm run build` and reporting modified files and reset behavior.

This is a summary-level transcription of the provided Task 6 instruction.

### README documentation — available task prompt

The README instruction asked for project title and description, overview, features, technology stack, actual project structure, installation/setup commands, synthetic-data limitations, placeholder clone instructions without inventing repository links, and an AI-assisted development note.

It explicitly required human-readable documentation based on the actual code and prohibited application functionality changes.

## 4. AI Contributions

GitHub Copilot Agent contributed implementation consistent with the staged human requirements, including:

- React pages and reusable components.
- React Router application layout, navigation links, and responsive desktop/mobile behavior.
- Lucide React interface icons.
- Recharts grouped bar charts and an illustrative line chart.
- Synthetic model records and synthetic experiment records.
- Derivation of accuracy, precision, recall, and F1-score from confusion-matrix values.
- `ConfusionMatrix`, `MetricsTable`, and `RocCurve` evaluation components.
- Browser LocalStorage save, retrieval, deletion, validation, and reset functions.
- The `useExperiments` custom hook and immediate React state updates.
- Experiment creation, validation, success/error feedback, delete confirmation, and empty states.
- Settings information and scoped reset behavior.
- Project README documentation.

Each contribution was scoped according to the instructions; dashboard and comparison functionality were not used as dependencies for other feature work beyond their existing synthetic data.

## 5. Human Review and Validation

Human direction established each feature stage and required Copilot Agent to inspect project instructions and relevant source files before implementation.

The project owner confirmed the following manual browser checks:

- The dashboard appearance and navigation were reviewed in the browser.
- Model comparison interactions were checked, including model selection changes and the no-selection empty state.
- The Evaluation model selector was tested, along with the updating metrics, confusion matrix, and visualizations.
- Experiment creation and required-name validation were tested.
- Experiment records were confirmed to persist after a browser refresh.
- Experiment deletion and confirmation behavior were confirmed.
- Settings reset behavior was tested and the separate illustrative sample records were confirmed to remain intact.

These are manual browser verification results confirmed by the project owner; they are not automated tests, and no screenshots or browser-test artifacts are claimed.

In addition, the project was validated with automated `npm run lint` and `npm run build` commands at implementation stages. The lint and build commands are separate from the manual browser checks and verify code quality and production compilation rather than browser interaction behavior.

Where the available project history does not verify a manual source-code edit, this document does not claim one. The confirmed record is that the project owner provided requirements, manually reviewed the application, and directed refinements; the AI performed the implemented code changes.

## 6. Corrections and Improvements

### Synthetic model data refinement

A review of the synthetic model dataset identified that initially hard-coded illustrative metrics were not directly tied to consistent test counts. The refinement added binary-classification confusion matrices for every model using the same 200-test-sample total.

Accuracy, precision, recall, and F1-score are now derived from each matrix:

- Accuracy: `(true negatives + true positives) / total samples`.
- Precision: `true positives / (true positives + false positives)`.
- Recall: `true positives / (true positives + false negatives)`.
- F1-score: the harmonic mean of precision and recall.

ROC-AUC remains a clearly illustrative synthetic value. A confusion matrix contains classification outcomes but does not provide thresholded probability values, so it cannot accurately generate an ROC curve. Keeping ROC-AUC as separate synthetic data prevents an unsupported calculation and makes the limitation transparent.

This refinement improved mathematical consistency, reproducibility, and honesty. It also made the model data suitable for the Evaluation page while avoiding the claim that actual model evaluation occurred.

### Other confirmed review-driven improvements

Review-driven implementation requirements resulted in:

- Explicit `Synthetic Demo Data` labels throughout relevant interfaces.
- Clear separation between browser-saved user experiments and the three illustrative sample records.
- Safe LocalStorage parsing and storage failure handling.
- Immediate state updates for experiment creation and deletion.
- Accessible labels and confirmation actions for destructive operations.
- Responsive tables and charts.
- Scoped reset behavior that affects only `modelscope.experiments`.

## 7. Limitations and Lessons Learned

### Limitations

- All model metrics and evaluation values are synthetic demonstrations, not measured results.
- No actual model training, dataset upload, or real model evaluation is performed.
- ROC curves are illustrative visualizations; the confusion matrix alone cannot produce a real ROC curve.
- Experiment records represent browser-local user entries and should not be interpreted as real experiment runs.
- Data is local to one browser profile and is not synchronized across devices.
- There is no backend, database, authentication, or external API.

### Lessons Learned

- AI output should be grounded in inspectable project instructions and existing source files.
- Synthetic data should be internally consistent and clearly labeled.
- Derived metrics must be checked against the counts from which they are calculated.
- ROC-AUC and ROC curves need explicit transparency when the values are illustrative.
- Browser Storage utility functions should validate values and handle unavailable or malformed storage safely.
- Destructive actions should require confirmation and provide clear success or error feedback.
- Automated linting and builds are useful checks, but human browser testing is necessary for navigation, form behavior, responsive layout, and interaction validation.

## 8. Conclusion

ModelScope demonstrates how GitHub Copilot Agent can accelerate staged frontend development while preserving clear human ownership of requirements and verification. The workflow combined AI-assisted implementation, project-owner manual browser verification, incremental task boundaries, synthetic-data controls, and automated lint/build validation.

The resulting project is not an actual machine-learning training system; it is a transparent frontend demonstration suitable for portfolio presentation. Careful review of the synthetic dataset, evidence-based prompts, and scoped storage behavior were important in keeping the implementation functional, professional, and honest about its limitations.
