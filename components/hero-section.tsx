"use client";

import { motion } from "motion/react";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { socialLinks } from "@/lib/portfolio-data";

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
};

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
          className="fill-muted-foreground/80 text-[11px] tracking-[0.28em] uppercase"
          fontSize="11"
        >
          <textPath href="#hero-avatar-ring" startOffset="0%">
            Paing Thura Kyaw • Full Stack Developer •
          </textPath>
        </text>
      </svg>

      <div className="absolute inset-5 rounded-full bg-linear-to-br from-brand via-brand-muted to-brand/70 p-[2px] shadow-[0_0_40px_var(--glow)]">
        <div className="bg-card text-foreground flex size-full items-center justify-center overflow-hidden rounded-full text-3xl font-bold">
          PTK
        </div>
      </div>
    </div>
  );
}

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-dvh flex-col items-center justify-center px-6 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <HeroAvatar />

        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-7xl">
          Paing Thura Kyaw
        </h1>

        <p className="text-brand mt-3 text-xl font-medium sm:text-2xl">
          Full-Stack Developer
        </p>

        <p className="text-muted-foreground mt-4 max-w-2xl text-base sm:text-lg">
          Crafting seamless digital experiences with React, React Native &amp;
          Node.js
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8 flex flex-wrap items-center justify-center gap-4"
      >
        <button
          type="button"
          onClick={() => scrollToSection("projects")}
          className="bg-foreground text-background inline-flex h-11 items-center justify-center rounded-full px-7 text-sm font-medium transition-opacity hover:opacity-90"
        >
          View Projects
        </button>
        <button
          type="button"
          onClick={() => scrollToSection("contact")}
          className="border-border text-foreground hover:bg-muted/50 inline-flex h-11 items-center justify-center rounded-full border bg-transparent px-7 text-sm font-medium transition-colors"
        >
          Get In Touch
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8 flex items-center gap-4"
      >
        {socialLinks.map((link) => {
          const Icon = socialIcons[link.label];
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className={`border-border text-muted-foreground flex size-10 items-center justify-center rounded-full border transition-all ${
                link.variant === "linkedin"
                  ? "hover:border-brand hover:text-brand"
                  : "hover:border-foreground hover:text-foreground"
              }`}
            >
              <Icon className="size-5" />
            </a>
          );
        })}
      </motion.div>

      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        onClick={() => scrollToSection("about")}
        aria-label="Scroll to about section"
        className="text-muted-foreground hover:text-foreground absolute bottom-8 left-1/2 -translate-x-1/2 transition-colors"
      >
        <ArrowDown className="size-6 animate-bounce" />
      </motion.button>
    </section>
  );
};

export default HeroSection;
