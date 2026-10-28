import { useState } from 'react'
import { AlertCircle, CheckCircle2, Database, Info, Monitor, RotateCcw, ShieldCheck } from 'lucide-react'
import { getExperiments, resetExperiments } from '../utils/storage.js'

const technologyStack = ['React', 'Vite', 'Tailwind CSS v4', 'React Router', 'Recharts', 'Lucide React', 'Browser LocalStorage']

function Settings() {
  const [savedCount, setSavedCount] = useState(() => getExperiments().length)
  const [message, setMessage] = useState(null)

  const handleReset = () => {
    if (!window.confirm('Reset all saved user-created experiment records? This cannot be undone.')) return

    if (resetExperiments()) {
      setSavedCount(0)
      setMessage({ type: 'success', text: 'All saved user-created experiment records were reset.' })
    } else {
      setMessage({ type: 'error', text: 'Saved experiment records could not be reset. Please check browser storage permissions.' })
    }
  }

  return (
    <div className="space-y-6">
      <section aria-labelledby="settings-heading">
        <p className="text-sm font-medium text-blue-600">Application preferences</p>
        <h2 id="settings-heading" className="mt-1 text-2xl font-bold tracking-tight text-slate-900">Settings</h2>
        <p className="mt-2 text-sm text-slate-500">Review ModelScope information and manage browser-stored experiment records.</p>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white shadow-sm" aria-labelledby="app-info-heading">
        <div className="flex items-center gap-3 border-b border-slate-200 px-5 py-4">
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-blue-50 text-blue-600" aria-hidden="true"><Monitor size={20} /></div>
          <div>
            <h3 id="app-info-heading" className="font-semibold text-slate-900">Application Information</h3>
            <p className="mt-1 text-xs text-slate-500">ModelScope dashboard details</p>
          </div>
        </div>
        <div className="grid gap-6 px-5 py-5 md:grid-cols-[1fr_1.4fr]">
          <dl className="space-y-4">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Application name</dt>
              <dd className="mt-1 font-semibold text-slate-900">ModelScope</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Description</dt>
              <dd className="mt-1 text-sm text-slate-700">ML Model Evaluation &amp; Experiment Dashboard</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Version</dt>
              <dd className="mt-1 text-sm font-semibold text-slate-900">1.0.0</dd>
            </div>
          </dl>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">Technology stack</h4>
            <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technology stack">
              {technologyStack.map((technology) => (
                <li key={technology} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700">
                  {technology}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white shadow-sm" aria-labelledby="privacy-heading">
        <div className="flex items-center gap-3 border-b border-slate-200 px-5 py-4">
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-green-50 text-green-600" aria-hidden="true"><ShieldCheck size={20} /></div>
          <div>
            <h3 id="privacy-heading" className="font-semibold text-slate-900">Data &amp; Privacy</h3>
            <p className="mt-1 text-xs text-slate-500">How information is handled in this dashboard</p>
          </div>
        </div>
        <div className="grid gap-4 px-5 py-5 md:grid-cols-2">
          <div className="flex gap-3 rounded-lg bg-blue-50/60 p-4">
            <Info size={18} className="mt-0.5 shrink-0 text-blue-600" aria-hidden="true" />
            <p className="text-sm leading-6 text-slate-700">Dashboard metrics and model evaluation results are <strong>Synthetic Demo Data</strong>. No actual model training or evaluation is performed.</p>
          </div>
          <div className="flex gap-3 rounded-lg bg-slate-50 p-4">
            <Database size={18} className="mt-0.5 shrink-0 text-slate-600" aria-hidden="true" />
            <p className="text-sm leading-6 text-slate-700">User-created experiment records are stored locally in this browser using LocalStorage. No backend or external API is used.</p>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white shadow-sm" aria-labelledby="experiment-data-heading">
        <div className="flex items-center gap-3 border-b border-slate-200 px-5 py-4">
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-rose-50 text-rose-600" aria-hidden="true"><Database size={20} /></div>
          <div>
            <h3 id="experiment-data-heading" className="font-semibold text-slate-900">Saved Experiment Data</h3>
            <p className="mt-1 text-xs text-slate-500">Manage only records created through the Experiments page</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-slate-900">Reset saved user-created experiments</p>
            <p className="mt-1 text-sm text-slate-500">{savedCount} saved {savedCount === 1 ? 'record' : 'records'} currently stored. Illustrative sample records are not affected.</p>
          </div>
          <button
            type="button"
            onClick={handleReset}
            disabled={savedCount === 0}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-rose-200 bg-white px-4 py-2 text-sm font-semibold text-rose-700 hover:bg-rose-50 disabled:cursor-not-allowed disabled:border-slate-200 disabled:text-slate-400 disabled:hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            <RotateCcw size={17} aria-hidden="true" /> Reset Experiment Records
          </button>
        </div>
      </section>

      {message && (
        <div className={`flex items-start gap-3 rounded-lg border px-4 py-3 text-sm ${message.type === 'success' ? 'border-green-200 bg-green-50 text-green-800' : 'border-rose-200 bg-rose-50 text-rose-800'}`} role="status">
          {message.type === 'success' ? <CheckCircle2 size={18} className="mt-0.5 shrink-0" /> : <AlertCircle size={18} className="mt-0.5 shrink-0" />}
          <span>{message.text}</span>
        </div>
      )}
    </div>
  )
}

export default Settings
