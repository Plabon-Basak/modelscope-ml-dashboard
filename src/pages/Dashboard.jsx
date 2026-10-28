import { Activity, BarChart3, Layers3, Trophy } from 'lucide-react'
import MetricCard from '../components/MetricCard.jsx'
import ModelPerformanceChart from '../components/ModelPerformanceChart.jsx'
import RecentExperiments from '../components/RecentExperiments.jsx'
import { sampleExperiments } from '../data/sampleExperiments.js'
import { SAMPLE_DATA_NOTICE, sampleModels } from '../data/sampleModels.js'

function Dashboard() {
  const modelCount = sampleModels.length
  const averageAccuracy = sampleModels.reduce((sum, model) => sum + model.accuracy, 0) / modelCount
  const averageF1 = sampleModels.reduce((sum, model) => sum + model.f1Score, 0) / modelCount
  const bestModel = sampleModels.reduce((best, model) =>
    model.accuracy > best.accuracy ? model : best,
  sampleModels[0])

  return (
    <div className="space-y-6">
      <section className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between" aria-labelledby="dashboard-heading">
        <div>
          <p className="text-sm font-medium text-blue-600">Synthetic demo workspace</p>
          <h2 id="dashboard-heading" className="mt-1 text-2xl font-bold tracking-tight text-slate-900">Welcome to ModelScope</h2>
          <p className="mt-2 text-sm text-slate-500">Illustrative performance overview for four example models.</p>
        </div>
        <div className="inline-flex w-fit items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-800" role="status">
          {SAMPLE_DATA_NOTICE}
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Dashboard summary metrics">
        <MetricCard title="Average Accuracy" value={`${averageAccuracy.toFixed(1)}%`} detail="Mean across 4 demo models" icon={Activity} tone="blue" />
        <MetricCard title="Average F1-score" value={`${averageF1.toFixed(1)}%`} detail="Mean across 4 demo models" icon={BarChart3} tone="violet" />
        <MetricCard title="Best Performing Model" value={bestModel.name} detail={`${bestModel.accuracy}% synthetic accuracy`} icon={Trophy} tone="green" />
        <MetricCard title="Total Models Evaluated" value={modelCount} detail="Synthetic demo models" icon={Layers3} tone="slate" />
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm" aria-labelledby="performance-heading">
        <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 id="performance-heading" className="font-semibold text-slate-900">Model Performance</h2>
            <p className="mt-1 text-xs text-slate-500">Synthetic Demo Data · Accuracy, precision, recall, and F1-score</p>
          </div>
        </div>
        <ModelPerformanceChart models={sampleModels} />
      </section>

      <RecentExperiments experiments={sampleExperiments} />
    </div>
  )
}

export default Dashboard
