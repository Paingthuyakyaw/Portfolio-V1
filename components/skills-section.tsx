"use client";

import { motion } from "motion/react";
import { experience, techLogos } from "@/lib/portfolio-data";

function TechLogoItem({ name, slug }: { name: string; slug: string }) {
  return (
    <div className="border-border bg-card/80 flex shrink-0 items-center gap-3 rounded-full border px-5 py-3 shadow-sm backdrop-blur-sm">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://cdn.simpleicons.org/${slug}`}
        alt=""
        width={24}
        height={24}
        className="size-6 dark:brightness-0 dark:invert"
        loading="lazy"
      />
      <span className="text-foreground text-sm font-medium whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

function LogoMarquee({
  items,
  direction = "left",
  duration = 40,
}: {
  items: readonly { name: string; slug: string }[];
  direction?: "left" | "right";
  duration?: number;
}) {
  const track = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      <div className="from-section-muted pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r to-transparent md:w-24" />
      <div className="from-section-muted pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l to-transparent md:w-24" />

      <div
        className={`flex w-max gap-4 hover:[animation-play-state:paused] motion-reduce:animate-none ${
          direction === "left" ? "animate-marquee" : "animate-marquee-reverse"
        }`}
        style={{ animationDuration: `${duration}s` }}
      >
        {track.map((tech, index) => (
          <TechLogoItem
            key={`${tech.name}-${index}`}
            name={tech.name}
            slug={tech.slug}
          />
        ))}
      </div>
    </div>
  );
}

export function SkillsSection() {
  const rowOne = techLogos.slice(0, 10);
  const rowTwo = techLogos.slice(10);

  return (
    <section
      id="skills"
      className="bg-section-muted scroll-mt-24 py-20"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <h2 className="mb-4 text-4xl font-medium tracking-tight md:text-5xl">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-lg">
            Tools I reach for when building products
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20 space-y-4"
      >
        <LogoMarquee items={rowOne} direction="left" duration={35} />
        <LogoMarquee items={rowTwo} direction="right" duration={40} />
      </motion.div>

      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="mb-12 text-center text-3xl font-medium">Experience</h3>
          <div className="mx-auto max-w-3xl space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-brand relative border-l-2 pl-8"
              >
                <div className="bg-brand absolute top-0 -left-2 size-4 rounded-full" />
                <div className="text-brand mb-1 text-sm">{exp.year}</div>
                <h4 className="mb-2 text-xl font-medium">{exp.title}</h4>
                <p className="text-muted-foreground">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
