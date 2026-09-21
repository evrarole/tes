export default function FeatureList({ id, title, description }) {
  return (
    <div
      key={id}
      className="rounded-xl border border-[var(--neo-border)] bg-white/80 p-6 shadow-[0_10px_30px_rgba(90,120,170,0.08)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(90,120,170,0.14)]"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--neo-primary-soft)] text-xl font-bold text-[var(--neo-primary-strong)]">
        {id}
      </div>

      <h3 className="mt-5 text-xl font-semibold text-[var(--neo-text)]">{title}</h3>

      <p className="mt-2 text-[var(--neo-muted)]">{description}</p>
    </div>
  );
}
