import { useState } from 'react'
import { AlertCircle, CheckCircle2, FlaskConical, Plus, Trash2 } from 'lucide-react'
import { useExperiments } from '../hooks/useExperiments.js'
import { sampleExperiments } from '../data/sampleExperiments.js'
import { SAMPLE_DATA_NOTICE, sampleModels } from '../data/sampleModels.js'

const initialForm = {
  name: '',
  model: 'Random Forest',
  notes: '',
}

function formatDate(value) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return 'Unknown date'
  return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(date)
}

function Experiments() {
  const { experiments, addExperiment, deleteExperiment, storageError } = useExperiments()
  const [form, setForm] = useState(initialForm)
  const [message, setMessage] = useState(null)

  const sortedExperiments = [...experiments].sort((a, b) => {
    const timeA = new Date(a.createdAt || 0).getTime()
    const timeB = new Date(b.createdAt || 0).getTime()
    return timeB - timeA
  })

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!form.name.trim()) {
      setMessage({ type: 'error', text: 'Experiment name is required.' })
      return
    }

    if (addExperiment(form)) {
      setForm(initialForm)
      setMessage({ type: 'success', text: 'Experiment saved successfully in this browser.' })
    } else {
      setMessage({ type: 'error', text: storageError || 'The experiment could not be saved.' })
    }
  }

  const handleDelete = (experiment) => {
    if (!window.confirm(`Delete "${experiment.name}"? This action cannot be undone.`)) return

    if (deleteExperiment(experiment.id)) {
      setMessage({ type: 'success', text: 'Experiment deleted successfully.' })
    } else {
      setMessage({ type: 'error', text: storageError || 'The experiment could not be deleted.' })
    }
  }

  return (
    <div className="space-y-6">
      <section className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between" aria-labelledby="experiments-heading">
        <div>
          <p className="text-sm font-medium text-blue-600">Browser experiment records</p>
          <h2 id="experiments-heading" className="mt-1 text-2xl font-bold tracking-tight text-slate-900">Experiments</h2>
          <p className="mt-2 text-sm text-slate-500">Create and manage illustrative experiment records stored locally.</p>
        </div>
        <div className="w-fit rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-800" role="status">
          {SAMPLE_DATA_NOTICE}
        </div>
      </section>

      {message && (
        <div className={`flex items-start gap-3 rounded-lg border px-4 py-3 text-sm ${message.type === 'success' ? 'border-green-200 bg-green-50 text-green-800' : 'border-rose-200 bg-rose-50 text-rose-800'}`} role="status">
          {message.type === 'success' ? <CheckCircle2 size={18} className="mt-0.5 shrink-0" /> : <AlertCircle size={18} className="mt-0.5 shrink-0" />}
          <span>{message.text}</span>
        </div>
      )}

      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm" aria-labelledby="create-experiment-heading">
        <div className="mb-5 flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-blue-50 text-blue-600" aria-hidden="true"><Plus size={20} /></div>
          <div>
            <h3 id="create-experiment-heading" className="font-semibold text-slate-900">Create Experiment</h3>
            <p className="mt-1 text-xs text-slate-500">This creates a local demonstration record; no model is trained.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4 lg:grid-cols-[1fr_1fr_1.2fr_auto] lg:items-end">
          <div>
            <label htmlFor="experiment-name" className="text-sm font-semibold text-slate-700">Experiment name <span aria-hidden="true">*</span></label>
            <input id="experiment-name" name="name" type="text" required value={form.name} onChange={updateField} placeholder="e.g. Random Forest review" className="mt-2 min-h-11 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
          </div>
          <div>
            <label htmlFor="experiment-model" className="text-sm font-semibold text-slate-700">Model</label>
            <select id="experiment-model" name="model" value={form.model} onChange={updateField} className="mt-2 min-h-11 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100">
              {sampleModels.map((model) => <option key={model.name} value={model.name}>{model.name}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="experiment-notes" className="text-sm font-semibold text-slate-700">Notes <span className="font-normal text-slate-500">(optional)</span></label>
            <input id="experiment-notes" name="notes" type="text" value={form.notes} onChange={updateField} placeholder="Add a short note" className="mt-2 min-h-11 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
          </div>
          <button type="submit" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
            <Plus size={17} aria-hidden="true" /> Save
          </button>
        </form>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white shadow-sm" aria-labelledby="saved-experiments-heading">
        <div className="border-b border-slate-200 px-5 py-4">
          <h3 id="saved-experiments-heading" className="font-semibold text-slate-900">Saved Experiments</h3>
          <p className="mt-1 text-xs text-slate-500">Browser LocalStorage records · Accuracy values are from {SAMPLE_DATA_NOTICE}</p>
        </div>

        {!sortedExperiments.length ? (
          <div className="px-6 py-12 text-center">
            <FlaskConical className="mx-auto text-slate-400" size={32} aria-hidden="true" />
            <h4 className="mt-3 font-semibold text-slate-900">No saved experiments yet</h4>
            <p className="mt-1 text-sm text-slate-500">Create an experiment above to add your first local record.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-5 py-3 font-semibold" scope="col">Experiment</th>
                  <th className="px-5 py-3 font-semibold" scope="col">Model</th>
                  <th className="px-5 py-3 text-right font-semibold" scope="col">Synthetic Accuracy</th>
                  <th className="px-5 py-3 font-semibold" scope="col">Created</th>
                  <th className="px-5 py-3 font-semibold" scope="col">Status</th>
                  <th className="px-5 py-3 text-right font-semibold" scope="col"><span className="sr-only">Actions</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {sortedExperiments.map((experiment) => {
                  const model = sampleModels.find((item) => item.name === experiment.model)
                  return (
                    <tr key={experiment.id} className="text-slate-700">
                      <th className="px-5 py-4 align-top font-medium text-slate-900" scope="row">
                        <span className="block">{experiment.name}</span>
                        {experiment.notes && <span className="mt-1 block max-w-xs text-xs font-normal text-slate-500">{experiment.notes}</span>}
                      </th>
                      <td className="px-5 py-4 align-top">{experiment.model}</td>
                      <td className="px-5 py-4 text-right align-top font-semibold text-slate-900">{model ? `${model.accuracy.toFixed(1)}%` : 'Unavailable'}</td>
                      <td className="px-5 py-4 align-top">{formatDate(experiment.createdAt)}</td>
                      <td className="px-5 py-4 align-top"><span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700">{experiment.status}</span></td>
                      <td className="px-5 py-4 text-right align-top">
                        <button type="button" onClick={() => handleDelete(experiment)} aria-label={`Delete ${experiment.name}`} className="inline-grid h-9 w-9 place-items-center rounded-lg border border-slate-200 text-slate-500 hover:border-rose-200 hover:bg-rose-50 hover:text-rose-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                          <Trash2 size={16} aria-hidden="true" />
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className="rounded-xl border border-slate-200 bg-white shadow-sm" aria-labelledby="sample-experiments-heading">
        <div className="border-b border-slate-200 px-5 py-4">
          <h3 id="sample-experiments-heading" className="font-semibold text-slate-900">Illustrative Sample Records</h3>
          <p className="mt-1 text-xs text-slate-500">Not saved to LocalStorage · {SAMPLE_DATA_NOTICE}</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[620px] text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr><th className="px-5 py-3 font-semibold" scope="col">Experiment</th><th className="px-5 py-3 font-semibold" scope="col">Model</th><th className="px-5 py-3 font-semibold" scope="col">Date</th><th className="px-5 py-3 font-semibold" scope="col">Status</th></tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {sampleExperiments.map((experiment) => (
                <tr key={experiment.id} className="text-slate-700">
                  <td className="px-5 py-4 font-medium text-slate-900">{experiment.name}</td>
                  <td className="px-5 py-4">{experiment.model}</td>
                  <td className="px-5 py-4">{experiment.date}</td>
                  <td className="px-5 py-4"><span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">{experiment.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default Experiments
