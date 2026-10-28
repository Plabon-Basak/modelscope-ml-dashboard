function MetricsTable({ model }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-slate-200">
      <table className="w-full min-w-[480px] text-left text-sm">
        <caption className="sr-only">Positive class synthetic classification report for {model.name}</caption>
        <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
          <tr>
            <th className="px-4 py-3 font-semibold" scope="col">Class</th>
            <th className="px-4 py-3 text-right font-semibold" scope="col">Precision</th>
            <th className="px-4 py-3 text-right font-semibold" scope="col">Recall</th>
            <th className="px-4 py-3 text-right font-semibold" scope="col">F1-score</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-slate-100 text-slate-700">
            <th className="px-4 py-4 font-semibold text-slate-900" scope="row">Positive</th>
            <td className="px-4 py-4 text-right font-medium">{model.precision.toFixed(2)}%</td>
            <td className="px-4 py-4 text-right font-medium">{model.recall.toFixed(2)}%</td>
            <td className="px-4 py-4 text-right font-medium">{model.f1Score.toFixed(2)}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default MetricsTable
