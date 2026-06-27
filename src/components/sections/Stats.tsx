type Fact = { value: string; label: string };

export function Stats({ stats }: { stats: Fact[] }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="border-l-2 border-brand-400 pl-5">
          <div className="font-display text-2xl font-semibold text-white sm:text-3xl">{s.value}</div>
          <div className="mt-1 text-sm text-white/75">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
