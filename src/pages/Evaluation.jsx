import { useState } from 'react'
import { Activity, BarChart3, Layers3, Target, Trophy } from 'lucide-react'
import MetricCard from '../components/MetricCard.jsx'
import ConfusionMatrix from '../components/evaluation/ConfusionMatrix.jsx'
import MetricsTable from '../components/evaluation/MetricsTable.jsx'
import RocCurve from '../components/evaluation/RocCurve.jsx'
import { SAMPLE_DATA_NOTICE, sampleModels } from '../data/sampleModels.js'

function Evaluation() {
  const [selectedName, setSelectedName] = useState('Random Forest')
  const selectedModel = sampleModels.find((model) => model.name === selectedName) ?? sampleModels[0]

  return (
    <div className="space-y-6">
      <section className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between" aria-labelledby="evaluation-heading">
        <div>
          <p className="text-sm font-medium text-blue-600">Synthetic model evaluation</p>
          <h2 id="evaluation-heading" className="mt-1 text-2xl font-bold tracking-tight text-slate-900">Model Evaluation</h2>
          <p className="mt-2 text-sm text-slate-500">Explore illustrative evaluation details for a selected model.</p>
        </div>
        <div className="w-fit rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-800" role="status">
          {SAMPLE_DATA_NOTICE}
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm" aria-labelledby="model-selector-heading">
        <label id="model-selector-heading" htmlFor="evaluation-model" className="block text-sm font-semibold text-slate-900">
          Select model
        </label>
        <select
          id="evaluation-model"
          value={selectedName}
          onChange={(event) => setSelectedName(event.target.value)}
          className="mt-2 min-h-11 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 sm:max-w-sm"
        >
          {sampleModels.map((model) => (
            <option key={model.name} value={model.name}>{model.name}</option>
          ))}
        </select>
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5" aria-label={`${selectedModel.name} synthetic evaluation metrics`}>
        <MetricCard title="Accuracy" value={`${selectedModel.accuracy.toFixed(2)}%`} detail="Derived from confusion matrix" icon={Activity} tone="blue" />
        <MetricCard title="Precision" value={`${selectedModel.precision.toFixed(2)}%`} detail="Positive class" icon={Target} tone="violet" />
        <MetricCard title="Recall" value={`${selectedModel.recall.toFixed(2)}%`} detail="Positive class" icon={BarChart3} tone="green" />
        <MetricCard title="F1-score" value={`${selectedModel.f1Score.toFixed(2)}%`} detail="Derived from precision and recall" icon={Trophy} tone="slate" />
        <MetricCard title="ROC-AUC" value={`${selectedModel.rocAuc.toFixed(1)}%`} detail="Illustrative synthetic value" icon={Layers3} tone="blue" />
      </section>

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4">
            <h3 className="font-semibold text-slate-900">Confusion Matrix</h3>
            <p className="mt-1 text-xs text-slate-500">{selectedModel.name} · {SAMPLE_DATA_NOTICE}</p>
          </div>
          <ConfusionMatrix model={selectedModel} />
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4">
            <h3 className="font-semibold text-slate-900">Classification Report</h3>
            <p className="mt-1 text-xs text-slate-500">Positive class · {SAMPLE_DATA_NOTICE}</p>
          </div>
          <MetricsTable model={selectedModel} />
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm" aria-labelledby="roc-heading">
        <div className="flex flex-col gap-1">
          <h3 id="roc-heading" className="font-semibold text-slate-900">Illustrative ROC Curve</h3>
          <p className="mt-1 text-xs text-slate-500">{selectedModel.name} · {SAMPLE_DATA_NOTICE}</p>
        </div>
        <div className="mt-4">
          <RocCurve model={selectedModel} />
        </div>
      </section>
    </div>
  )
}

export default Evaluation
