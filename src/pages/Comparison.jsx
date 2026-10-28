import { useState } from 'react'
import { CheckCircle2, Trophy } from 'lucide-react'
import ModelComparisonChart from '../components/ModelComparisonChart.jsx'
import { SAMPLE_DATA_NOTICE, sampleModels } from '../data/sampleModels.js'

const metricColumns = [
  { key: 'accuracy', label: 'Accuracy' },
  { key: 'precision', label: 'Precision' },
  { key: 'recall', label: 'Recall' },
  { key: 'f1Score', label: 'F1-score' },
  { key: 'rocAuc', label: 'ROC-AUC' },
]

function Comparison() {
  const [selectedNames, setSelectedNames] = useState(() => new Set(sampleModels.map((model) => model.name)))
  const selectedModels = sampleModels.filter((model) => selectedNames.has(model.name))

  const toggleModel = (name) => {
    setSelectedNames((current) => {
      const next = new Set(current)
      if (next.has(name)) next.delete(name)
      else next.add(name)
      return next
    })
  }

  const highestValues = Object.fromEntries(
    metricColumns.map(({ key }) => {
      const values = selectedModels.map((model) => model[key])
      return [key, values.length ? Math.max(...values) : null]
    }),
  )

  const bestModel = selectedModels.length
    ? selectedModels.reduce((best, model) => model.accuracy > best.accuracy ? model : best)
    : null

  return (
    <div className="space-y-6">
      <section className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between" aria-labelledby="comparison-heading">
        <div>
          <p className="text-sm font-medium text-blue-600">Synthetic model results</p>
          <h2 id="comparison-heading" className="mt-1 text-2xl font-bold tracking-tight text-slate-900">Model Comparison</h2>
          <p className="mt-2 text-sm text-slate-500">Select one or more models to compare their illustrative performance.</p>
        </div>
        <div className="w-fit rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-800" role="status">
          {SAMPLE_DATA_NOTICE}
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm" aria-labelledby="model-selection-heading">
        <h3 id="model-selection-heading" className="text-sm font-semibold text-slate-900">Models to compare</h3>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {sampleModels.map((model) => {
            const inputId = `model-${model.name.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}`
            return (
              <label key={model.name} htmlFor={inputId} className="flex min-h-11 cursor-pointer items-center gap-3 rounded-lg border border-slate-200 px-3 py-2.5 text-sm font-medium text-slate-700 hover:border-blue-300 hover:bg-blue-50/40">
                <input
                  id={inputId}
                  type="checkbox"
                  checked={selectedNames.has(model.name)}
                  onChange={() => toggleModel(model.name)}
                  className="h-4 w-4 rounded border-slate-300 accent-blue-600"
                />
                <span>{model.name}</span>
              </label>
            )
          })}
        </div>
      </section>

      {!selectedModels.length ? (
        <section className="rounded-xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center" role="status">
          <CheckCircle2 className="mx-auto text-slate-400" size={32} aria-hidden="true" />
          <h3 className="mt-3 font-semibold text-slate-900">No models selected</h3>
          <p className="mt-1 text-sm text-slate-500">Select at least one model to view the comparison and chart.</p>
        </section>
      ) : (
        <>
          <section className="rounded-xl border border-slate-200 bg-white shadow-sm" aria-labelledby="comparison-table-heading">
            <div className="border-b border-slate-200 px-5 py-4">
              <h3 id="comparison-table-heading" className="font-semibold text-slate-900">Performance Comparison</h3>
              <p className="mt-1 text-xs text-slate-500">Highlighted values are highest among selected models · {SAMPLE_DATA_NOTICE}</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-5 py-3 font-semibold" scope="col">Model</th>
                    {metricColumns.map(({ key, label }) => (
                      <th key={key} className="px-5 py-3 text-right font-semibold" scope="col">{label}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {selectedModels.map((model) => (
                    <tr key={model.name} className="text-slate-700">
                      <th className="px-5 py-4 font-medium text-slate-900" scope="row">{model.name}</th>
                      {metricColumns.map(({ key }) => {
                        const isHighest = model[key] === highestValues[key]
                        return (
                          <td key={key} className="px-5 py-4 text-right">
                            <span className={isHighest ? 'rounded-md bg-green-50 px-2 py-1 font-bold text-green-700' : ''}>
                              {model[key].toFixed(1)}%
                            </span>
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm" aria-labelledby="comparison-chart-heading">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 id="comparison-chart-heading" className="font-semibold text-slate-900">Selected Model Performance</h3>
                <p className="mt-1 text-xs text-slate-500">{SAMPLE_DATA_NOTICE}</p>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-green-100 bg-green-50 px-4 py-3">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-white text-green-600" aria-hidden="true"><Trophy size={18} /></div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-green-700">Best accuracy among selected</p>
                  <p className="mt-0.5 text-sm font-bold text-slate-900">{bestModel.name} · {bestModel.accuracy.toFixed(1)}%</p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <ModelComparisonChart models={selectedModels} />
            </div>
          </section>
        </>
      )}
    </div>
  )
}

export default Comparison
