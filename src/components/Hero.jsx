import { useState } from "react";

function Hero() {
  const [hidden, setHidden] = useState(false);
  return (
    <section id="home" className="mx-auto max-w-6xl px-6 py-24 text-center">
      {hidden && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4">
          {/* Modal */}
          <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-[0_20px_60px_rgba(71,110,173,0.25)]">
            {/* Close button */}
            <button
              onClick={() => {
                setHidden(false);
              }}
              type="button"
              className="absolute right-4 top-4 text-xl text-slate-400 transition hover:text-slate-700"
            >
              &times;
            </button>

            {/* Header */}
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-bold text-[var(--neo-text)]">Login</h2>

              <p className="mt-2 text-sm text-[var(--neo-muted)]">
                Sign in to continue to your account.
              </p>
            </div>

            {/* Form */}
            <form className="space-y-4">
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
                  htmlFor="password"
                  className="mb-1 block text-sm font-medium text-slate-700"
                >
                  Password
                </label>

                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full rounded-lg border border-[var(--neo-border)] bg-white px-4 py-2.5 outline-none transition focus:border-[var(--neo-primary)] focus:ring-2 focus:ring-[var(--neo-ring)]"
                />
              </div>

              {/* Options */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-slate-600">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-300"
                  />
                  Remember me
                </label>

                <button
                  type="button"
                  className="font-medium text-[var(--neo-primary)] hover:text-[var(--neo-primary-strong)]"
                >
                  Forgot password?
                </button>
              </div>

              {/* Login */}
              <button
                type="submit"
                className="w-full rounded-lg bg-[var(--neo-primary)] px-4 py-2.5 font-medium text-white transition hover:bg-[var(--neo-primary-strong)]"
              >
                Login
              </button>
            </form>

            {/* Footer */}
            <p className="mt-6 text-center text-sm text-[var(--neo-muted)]">
              Don't have an account?{" "}
              <button
                type="button"
                className="font-medium text-[var(--neo-primary)] hover:text-[var(--neo-primary-strong)]"
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
      )}
      <h2 className="text-4xl font-bold text-[var(--neo-text)] md:text-5xl">
        Build Something
        <span className="text-[var(--neo-primary)]"> Awesome</span>
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--neo-muted)]">
        A simple React JS website created using reusable React components and
        Tailwind CSS.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <button
          onClick={() => {
            if (hidden === true) {
              setHidden(false);
            } else {
              setHidden(true);
            }
            console.log(hidden);
          }}
          className="rounded-lg bg-[var(--neo-primary)] px-6 py-3 text-white transition hover:bg-[var(--neo-primary-strong)]"
        >
          Get Started
        </button>

        <button className="rounded-lg border border-[var(--neo-border)] px-6 py-3 text-[var(--neo-text)] transition hover:bg-white/70">
          Learn More
        </button>
      </div>
    </section>
  );
}

export default Hero;
