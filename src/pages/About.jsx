export default function About() {
  return (
    <div className="bg-[var(--neo-bg)] text-[var(--neo-text)]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        {/* Header */}
        <header className="mb-16 border-b border-[var(--neo-border)] pb-10 text-center">
          <h1 className="text-4xl font-bold text-[var(--neo-text)] md:text-5xl">
            About <span className="text-[var(--neo-primary)]">Odette Marsh</span>
          </h1>
          <p className="mt-3 text-sm text-[var(--neo-muted)]">Bristol, UK</p>
        </header>

        {/* Bio + pull quote */}
        <section className="mb-16 grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-lg text-[var(--neo-muted)]">
              Odette runs a small letterpress studio from a converted stable in
              the Somerset hills, printing on a hundred-year-old Vandercook and
              a cabinet of wood and metal type collected over two decades.
            </p>
            <p className="mt-4 text-lg text-[var(--neo-muted)]">
              She trained as a graphic designer before apprenticing under a
              retiring printer in Devon, and now splits her time between
              commissioned broadsides, small print runs for local writers, and
              teaching newcomers to set type by hand.
            </p>
          </div>

          <blockquote className="flex items-center border-l-4 border-[var(--neo-primary)] pl-6">
            <p className="text-2xl font-bold italic text-[var(--neo-text)] md:text-3xl">
              "Ink remembers the pressure of the hand that set it."
            </p>
          </blockquote>
        </section>

        {/* Practice */}
        <section className="mb-16 border-t border-[var(--neo-border)] bg-white/40 py-10">
          <h2 className="mb-4 text-3xl font-bold text-[var(--neo-text)]">Practice</h2>
          <p className="max-w-2xl text-[var(--neo-muted)]">
            Her work moves between hand-set metal type and carved wood
            letterforms, from one-off broadsides to short runs for independent
            poets, alongside small-group workshops for anyone wanting to learn
            the press.
          </p>
        </section>

        {/* Colophon / footer */}
        <footer className="border-t border-[var(--neo-border)] pt-8">
          <dl className="flex flex-col gap-6 text-sm md:flex-row md:justify-between">
            <div>
              <dt className="font-bold text-[var(--neo-text)]">Studio hours</dt>
              <dd className="mt-1 text-[var(--neo-muted)]">Tuesday–Saturday, 10–5</dd>
            </div>
            <div>
              <dt className="font-bold text-[var(--neo-text)]">Write</dt>
              <dd className="mt-1">
                <a
                  href="mailto:odette@marshpress.co"
                  className="font-medium text-[var(--neo-primary)] hover:text-[var(--neo-primary-strong)]"
                >
                  odette@marshpress.co
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-bold text-[var(--neo-text)]">Visit</dt>
              <dd className="mt-1 text-[var(--neo-muted)]">14 Coombe Lane, Somerset</dd>
            </div>
          </dl>
        </footer>
      </div>
    </div>
  );
}

