function MetricCard({ title, value, detail, icon: Icon, tone = 'blue' }) {
  const iconStyles = {
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600',
    violet: 'bg-violet-50 text-violet-600',
    slate: 'bg-slate-100 text-slate-600',
  }

  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <p className="mt-2 text-2xl font-bold tracking-tight text-slate-900">{value}</p>
          {detail && <p className="mt-1 text-xs text-slate-500">{detail}</p>}
        </div>
        {Icon && (
          <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg ${iconStyles[tone]}`} aria-hidden="true">
            <Icon size={20} strokeWidth={2} />
          </div>
        )}
      </div>
    </article>
  )
}

export default MetricCard
