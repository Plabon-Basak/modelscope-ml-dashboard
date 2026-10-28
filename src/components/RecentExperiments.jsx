import { FlaskConical } from 'lucide-react'

function RecentExperiments({ experiments }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
        <div>
          <h2 className="font-semibold text-slate-900">Recent Experiments</h2>
          <p className="mt-1 text-xs font-medium text-slate-500">Sample records only — not saved data</p>
        </div>
        <FlaskConical size={20} className="text-slate-400" aria-hidden="true" />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-5 py-3 font-semibold" scope="col">Experiment</th>
              <th className="px-5 py-3 font-semibold" scope="col">Model</th>
              <th className="px-5 py-3 font-semibold" scope="col">Date</th>
              <th className="px-5 py-3 font-semibold" scope="col">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {experiments.map((experiment) => (
              <tr key={experiment.id} className="text-slate-700">
                <td className="px-5 py-4 font-medium text-slate-900">{experiment.name}</td>
                <td className="px-5 py-4">{experiment.model}</td>
                <td className="px-5 py-4">{experiment.date}</td>
                <td className="px-5 py-4">
                  <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                    {experiment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RecentExperiments
