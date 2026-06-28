import Link from "next/link";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-5"
        aria-hidden="true"
      >
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-5"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:hello@example.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5"
        aria-hidden="true"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

function HeroAvatar() {
  return (
    <div className="relative mx-auto mb-10 size-44 sm:size-48">
      <svg
        className="absolute inset-0 size-full animate-[spin_24s_linear_infinite]"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <defs>
          <path
            id="hero-avatar-ring"
            d="M 100, 100 m -82, 0 a 82,82 0 1,1 164,0 a 82,82 0 1,1 -164,0"
            fill="none"
          />
        </defs>
        <text
          fill="currentColor"
          className="fill-muted-foreground/80 text-[11px] uppercase tracking-[0.28em]"
          fontSize="11"
        >
          <textPath href="#hero-avatar-ring" startOffset="0%">
            Paing Thura Kyaw • Full Stack Developer •
          </textPath>
        </text>
      </svg>

      <div className="absolute inset-5 rounded-full p-[3px] shadow-[0_0_32px_rgba(59,130,246,0.45)] bg-linear-to-br from-blue-400 via-blue-500 to-blue-600">
        <div className="flex size-full items-center justify-center overflow-hidden rounded-full bg-linear-to-br from-slate-700 to-slate-900 text-3xl font-bold text-white">
          PTK
        </div>
      </div>
    </div>
  );
}

function ScrollIndicator() {
  return (
    <Link
      href="#about"
      aria-label="Scroll to about section"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-6 animate-bounce"
        aria-hidden="true"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </Link>
  );
}

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[calc(100dvh-5.5rem)] flex-col items-center justify-center px-6 py-16 text-center">
      <HeroAvatar />

      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
        Paing Thura Kyaw
      </h1>

      <p className="mt-3 text-xl font-medium text-blue-500 sm:text-2xl">
        Full-Stack Developer
      </p>

      <p className="mt-4 max-w-md text-base text-muted-foreground sm:text-lg">
        Crafting seamless experiences with React, React Native &amp; Node.js
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="#projects"
          className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-7 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          View Projects
        </Link>
        <Link
          href="#contact"
          className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-transparent px-7 text-sm font-medium text-foreground transition-colors hover:bg-muted/50"
        >
          Get In Touch
        </Link>
      </div>

      <div className="mt-8 flex items-center gap-5">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            {link.icon}
          </a>
        ))}
      </div>

      <ScrollIndicator />
    </section>
  );
};

export default HeroSection;
