"use client";

import { motion } from "motion/react";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { socialLinks } from "@/lib/portfolio-data";

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
};

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
