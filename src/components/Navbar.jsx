function Navbar() {
  return (
    <nav className="sticky top-0 z-30 border-b border-[var(--neo-border)] bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-[var(--neo-primary-strong)]">
          Kelas Front-End
        </h1>

        <div className="flex gap-6">
          <a href="/" className="text-[var(--neo-muted)] transition hover:text-[var(--neo-primary)]">
            Home
          </a>

          <a href="/Features" className="text-[var(--neo-muted)] transition hover:text-[var(--neo-primary)]">
            Features
          </a>

          <a href="/About" className="text-[var(--neo-muted)] transition hover:text-[var(--neo-primary)]">
            About
          </a>
          <a href="/Contact" className="text-[var(--neo-muted)] transition hover:text-[var(--neo-primary)]">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
