import FeatureList from "./props/FeatureList";
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

function Features() {
  return (
    <section id="features" className="bg-[var(--neo-soft)] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[var(--neo-text)]">Features</h2>

          <p className="mt-3 text-[var(--neo-muted)]">
            Everything is built using React and Tailwind CSS.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureList
              id={feature.id}
              title={feature.title}
              description={feature.description}
            ></FeatureList>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
