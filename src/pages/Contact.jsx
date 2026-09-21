export default function Contact() {
  return (
    <div className="bg-[var(--neo-bg)] text-[var(--neo-text)]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        {/* Header */}
        <header className="mb-16 border-b border-[var(--neo-border)] pb-10 text-center">
          <h1 className="text-4xl font-bold text-[var(--neo-text)] md:text-5xl">
            Get in <span className="text-[var(--neo-primary)]">Touch</span>
          </h1>
          <p className="mt-3 text-sm text-[var(--neo-muted)]">
            We'd love to hear from you
          </p>
        </header>

        {/* Form + info */}
        <section className="mb-16 grid gap-12 md:grid-cols-2 md:gap-16">
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-sm font-medium text-slate-700"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg border border-[var(--neo-border)] bg-white px-4 py-2.5 outline-none transition focus:border-[var(--neo-primary)] focus:ring-2 focus:ring-[var(--neo-ring)]"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-slate-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-[var(--neo-border)] bg-white px-4 py-2.5 outline-none transition focus:border-[var(--neo-primary)] focus:ring-2 focus:ring-[var(--neo-ring)]"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-sm font-medium text-slate-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="How can we help?"
                className="w-full rounded-lg border border-[var(--neo-border)] bg-white px-4 py-2.5 outline-none transition focus:border-[var(--neo-primary)] focus:ring-2 focus:ring-[var(--neo-ring)]"
              />
            </div>

            <button
              type="submit"
              className="rounded-lg bg-[var(--neo-primary)] px-6 py-3 text-white transition hover:bg-[var(--neo-primary-strong)]"
            >
              Send Message
            </button>
          </form>

          <blockquote className="flex items-center border-l-4 border-[var(--neo-primary)] pl-6">
            <p className="text-2xl font-bold italic text-[var(--neo-text)] md:text-3xl">
              "Questions, ideas, or just a hello — our inbox is always open."
            </p>
          </blockquote>
        </section>

        {/* Colophon / footer */}
        <footer className="border-t border-[var(--neo-border)] pt-8">
          <dl className="flex flex-col gap-6 text-sm md:flex-row md:justify-between">
            <div>
              <dt className="font-bold text-[var(--neo-text)]">Office hours</dt>
              <dd className="mt-1 text-[var(--neo-muted)]">Monday–Friday, 9–5</dd>
            </div>
            <div>
              <dt className="font-bold text-[var(--neo-text)]">Write</dt>
              <dd className="mt-1">
                <a
                  href="mailto:hello@mywebsite.com"
                  className="font-medium text-[var(--neo-primary)] hover:text-[var(--neo-primary-strong)]"
                >
                  hello@mywebsite.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-bold text-[var(--neo-text)]">Visit</dt>
              <dd className="mt-1 text-[var(--neo-muted)]">123 Main Street, Anytown</dd>
            </div>
          </dl>
        </footer>
      </div>
    </div>
  );
}
