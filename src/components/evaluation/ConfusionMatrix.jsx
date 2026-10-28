function ConfusionMatrix({ model }) {
  const cells = [
    { label: 'True Negative', short: 'TN', value: model.trueNegative, style: 'bg-blue-50 text-blue-800 border-blue-200' },
    { label: 'False Positive', short: 'FP', value: model.falsePositive, style: 'bg-amber-50 text-amber-800 border-amber-200' },
    { label: 'False Negative', short: 'FN', value: model.falseNegative, style: 'bg-rose-50 text-rose-800 border-rose-200' },
    { label: 'True Positive', short: 'TP', value: model.truePositive, style: 'bg-green-50 text-green-800 border-green-200' },
  ]

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[420px] border-separate border-spacing-2 text-center">
        <caption className="sr-only">
          Synthetic confusion matrix for {model.name}, showing actual classes by row and predicted classes by column
        </caption>
        <thead>
          <tr>
            <th scope="col" className="p-2 text-xs font-semibold text-slate-500">
              Actual / Predicted
            </th>
            <th scope="col" className="p-2 text-sm font-semibold text-slate-700">Predicted Negative</th>
            <th scope="col" className="p-2 text-sm font-semibold text-slate-700">Predicted Positive</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className="p-2 text-sm font-semibold text-slate-700">Actual Negative</th>
            <td className={`rounded-lg border p-4 ${cells[0].style}`} aria-label={`${cells[0].label}: ${cells[0].value}`}>
              <span className="block text-xs font-bold">{cells[0].short}</span>
              <span className="mt-1 block text-2xl font-bold">{cells[0].value}</span>
              <span className="mt-1 block text-xs font-medium">{cells[0].label}</span>
            </td>
            <td className={`rounded-lg border p-4 ${cells[1].style}`} aria-label={`${cells[1].label}: ${cells[1].value}`}>
              <span className="block text-xs font-bold">{cells[1].short}</span>
              <span className="mt-1 block text-2xl font-bold">{cells[1].value}</span>
              <span className="mt-1 block text-xs font-medium">{cells[1].label}</span>
            </td>
          </tr>
          <tr>
            <th scope="row" className="p-2 text-sm font-semibold text-slate-700">Actual Positive</th>
            <td className={`rounded-lg border p-4 ${cells[2].style}`} aria-label={`${cells[2].label}: ${cells[2].value}`}>
              <span className="block text-xs font-bold">{cells[2].short}</span>
              <span className="mt-1 block text-2xl font-bold">{cells[2].value}</span>
              <span className="mt-1 block text-xs font-medium">{cells[2].label}</span>
            </td>
            <td className={`rounded-lg border p-4 ${cells[3].style}`} aria-label={`${cells[3].label}: ${cells[3].value}`}>
              <span className="block text-xs font-bold">{cells[3].short}</span>
              <span className="mt-1 block text-2xl font-bold">{cells[3].value}</span>
              <span className="mt-1 block text-xs font-medium">{cells[3].label}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ConfusionMatrix
