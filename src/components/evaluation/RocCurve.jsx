import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts'

function RocCurve({ model }) {
  const aucRatio = model.rocAuc / 100
  const curve = [
    { falsePositiveRate: 0, truePositiveRate: 0 },
    { falsePositiveRate: 0.1, truePositiveRate: 0.18 + aucRatio * 0.16 },
    { falsePositiveRate: 0.2, truePositiveRate: 0.35 + aucRatio * 0.22 },
    { falsePositiveRate: 0.4, truePositiveRate: 0.58 + aucRatio * 0.22 },
    { falsePositiveRate: 0.65, truePositiveRate: 0.78 + aucRatio * 0.14 },
    { falsePositiveRate: 1, truePositiveRate: 1 },
  ].map((point) => ({
    ...point,
    truePositiveRate: Math.min(1, point.truePositiveRate),
    baseline: point.falsePositiveRate,
  }))

  return (
    <div>
      <div className="mb-2 flex items-center justify-end">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
          Illustrative ROC-AUC: {model.rocAuc.toFixed(1)}%
        </span>
      </div>
      <div className="h-[300px] w-full" role="img" aria-label={`Illustrative ROC curve for ${model.name}`}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={curve} margin={{ top: 8, right: 12, bottom: 8, left: -8 }}>
            <CartesianGrid stroke="#E2E8F0" strokeDasharray="3 3" />
            <XAxis type="number" dataKey="falsePositiveRate" domain={[0, 1]} tickCount={6} tickFormatter={(value) => value.toFixed(1)} tick={{ fill: '#64748B', fontSize: 12 }} label={{ value: 'False Positive Rate', position: 'insideBottom', offset: -4, fill: '#64748B', fontSize: 12 }} />
            <YAxis type="number" dataKey="truePositiveRate" domain={[0, 1]} tickCount={6} tickFormatter={(value) => value.toFixed(1)} tick={{ fill: '#64748B', fontSize: 12 }} label={{ value: 'True Positive Rate', angle: -90, position: 'insideLeft', fill: '#64748B', fontSize: 12 }} />
            <Tooltip formatter={(value) => Number(value).toFixed(2)} contentStyle={{ border: '1px solid #E2E8F0', borderRadius: 8 }} />
            <Legend verticalAlign="top" wrapperStyle={{ fontSize: 12 }} />
            <Line type="monotone" dataKey="truePositiveRate" name={`${model.name} (illustrative)`} stroke="#2563EB" strokeWidth={3} dot={{ r: 3, fill: '#2563EB' }} activeDot={{ r: 5 }} />
            <Line type="linear" dataKey="baseline" name="Random classifier baseline" stroke="#94A3B8" strokeWidth={2} strokeDasharray="6 4" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-2 text-xs text-slate-500">
        This ROC curve is illustrative synthetic visualization data and was not derived from the confusion matrix.
      </p>
    </div>
  )
}

export default RocCurve
