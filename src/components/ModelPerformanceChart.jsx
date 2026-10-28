import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

function ModelPerformanceChart({ models }) {
  return (
    <div className="h-[340px] w-full" role="img" aria-label="Grouped bar chart comparing accuracy, precision, recall, and F1-score for four synthetic demo models">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={models} margin={{ top: 8, right: 8, left: -12, bottom: 8 }}>
          <CartesianGrid stroke="#E2E8F0" strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="name"
            tick={{ fill: '#64748B', fontSize: 12 }}
            tickLine={false}
            axisLine={{ stroke: '#E2E8F0' }}
            interval={0}
            height={52}
            tickFormatter={(value) => value === 'Support Vector Machine (SVM)' ? 'SVM' : value === 'Logistic Regression' ? 'Logistic' : value === 'Random Forest' ? 'Random Forest' : value}
          />
          <YAxis
            domain={[0, 100]}
            tickFormatter={(value) => `${value}%`}
            tick={{ fill: '#64748B', fontSize: 12 }}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            formatter={(value) => [`${value}%`, undefined]}
            contentStyle={{ border: '1px solid #E2E8F0', borderRadius: 8, boxShadow: '0 4px 12px rgba(15,23,42,0.08)' }}
          />
          <Legend wrapperStyle={{ fontSize: 12, paddingTop: 8 }} />
          <Bar dataKey="accuracy" name="Accuracy" fill="#2563EB" radius={[3, 3, 0, 0]} />
          <Bar dataKey="precision" name="Precision" fill="#7C3AED" radius={[3, 3, 0, 0]} />
          <Bar dataKey="recall" name="Recall" fill="#0D9488" radius={[3, 3, 0, 0]} />
          <Bar dataKey="f1Score" name="F1-score" fill="#F59E0B" radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ModelPerformanceChart
