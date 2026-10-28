export const SAMPLE_DATA_NOTICE = 'Synthetic Demo Data'

// All model names, counts, and metrics are synthetic and illustrative demonstration data.

const deriveClassificationMetrics = ({ trueNegative, falsePositive, falseNegative, truePositive }) => {
  const total = trueNegative + falsePositive + falseNegative + truePositive
  const precision = truePositive + falsePositive === 0
    ? 0
    : (truePositive / (truePositive + falsePositive)) * 100
  const recall = truePositive + falseNegative === 0
    ? 0
    : (truePositive / (truePositive + falseNegative)) * 100
  const f1Score = precision + recall === 0
    ? 0
    : (2 * precision * recall) / (precision + recall)

  return {
    accuracy: ((trueNegative + truePositive) / total) * 100,
    precision,
    recall,
    f1Score,
  }
}

const models = [
  {
    name: 'Logistic Regression',
    trueNegative: 100,
    falsePositive: 18,
    falseNegative: 14,
    truePositive: 68,
    rocAuc: 88,
  },
  {
    name: 'Random Forest',
    trueNegative: 83,
    falsePositive: 7,
    falseNegative: 9,
    truePositive: 101,
    rocAuc: 95,
  },
  {
    name: 'Support Vector Machine (SVM)',
    trueNegative: 92,
    falsePositive: 8,
    falseNegative: 14,
    truePositive: 86,
    rocAuc: 92,
  },
  {
    name: 'Decision Tree',
    trueNegative: 88,
    falsePositive: 12,
    falseNegative: 16,
    truePositive: 84,
    rocAuc: 89,
  },
]

export const sampleModels = models.map((model) => ({
  ...model,
  ...deriveClassificationMetrics(model),
}))
