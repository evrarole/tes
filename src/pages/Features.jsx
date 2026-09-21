import FeatureList from "../components/props/FeatureList";

const features = [
  {
    id: 1,
    title: "Simple",
    description: "Easy to understand structure suitable for learning React.",
  },
  {
    id: 2,
    title: "Reusable",
    description: "The page is divided into reusable React components.",
  },
  {
    id: 3,
    title: "Responsive",
    description: "Tailwind CSS makes it easy to build responsive layouts.",
  },
];

export default function Features() {
  return (
    <div className="bg-[var(--neo-bg)] text-[var(--neo-text)]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        {/* Header */}
        <header className="mb-16 border-b border-[var(--neo-border)] pb-10 text-center">
          <h1 className="text-4xl font-bold text-[var(--neo-text)] md:text-5xl">
            Our <span className="text-[var(--neo-primary)]">Features</span>
          </h1>
          <p className="mt-3 text-sm text-[var(--neo-muted)]">
            What makes this project easy to build with
          </p>
        </header>

        {/* Intro + pull quote */}
        <section className="mb-16 grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-lg text-[var(--neo-muted)]">
              This project is built entirely with React and Tailwind CSS,
              split into small, reusable components that are easy to follow
              and extend.
            </p>
            <p className="mt-4 text-lg text-[var(--neo-muted)]">
              Each piece — from the layout to the individual cards — is kept
              simple on purpose, so the structure stays clear whether you're
              learning React for the first time or building on top of it.
            </p>
          </div>

          <blockquote className="flex items-center border-l-4 border-[var(--neo-primary)] pl-6">
            <p className="text-2xl font-bold italic text-[var(--neo-text)] md:text-3xl">
              "Simple components, composed together, build something awesome."
            </p>
          </blockquote>
        </section>

        {/* Feature grid */}
        <section className="border-t border-[var(--neo-border)] bg-white/40 py-10">
          <h2 className="mb-4 text-3xl font-bold text-[var(--neo-text)]">
            What's included
          </h2>
          <p className="mb-10 max-w-2xl text-[var(--neo-muted)]">
            A quick look at the core ideas behind how this site is put
            together.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <FeatureList
                key={feature.id}
                id={feature.id}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
