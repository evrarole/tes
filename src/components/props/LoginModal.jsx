function LoginModal() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40">
      {/* Modal */}
      <div className="relative mx-4 w-full max-w-md rounded-xl bg-white p-6 shadow-[0_20px_60px_rgba(71,110,173,0.25)]">
        {/* Close Button */}
        <button className="absolute right-4 top-4 text-2xl text-slate-400 hover:text-slate-700">
          &times;
        </button>

        {/* Header */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-[var(--neo-text)]">Login</h2>

          <p className="mt-2 text-sm text-[var(--neo-muted)]">Sign in to your account</p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-slate-700"
            >
              Email
            </label>

            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-[var(--neo-border)] px-4 py-2 outline-none transition focus:border-[var(--neo-primary)] focus:ring-2 focus:ring-[var(--neo-ring)]"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-1 block text-sm font-medium text-slate-700"
            >
              Password
            </label>

            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-[var(--neo-border)] px-4 py-2 outline-none transition focus:border-[var(--neo-primary)] focus:ring-2 focus:ring-[var(--neo-ring)]"
            />
          </div>

          {/* Remember + Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4" />
              <span className="text-slate-600">Remember me</span>
            </label>

            <button type="button" className="text-[var(--neo-primary)] hover:underline">
              Forgot password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-[var(--neo-primary)] px-4 py-2 font-medium text-white transition hover:bg-[var(--neo-primary-strong)]"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-[var(--neo-muted)]">
          Don't have an account?{" "}
          <button className="font-medium text-[var(--neo-primary)] hover:underline">
            Register
          </button>
        </p>
      </div>
    </div>
  );
}

export default LoginModal;
