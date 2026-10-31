"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/portfolio-data";
import { ProjectCard } from "@/components/project-card";

type ProjectsSectionProps = {
  limit?: number;
  showMoreLink?: boolean;
  title?: string;
  subtitle?: string;
};

export function ProjectsSection({
  limit,
  showMoreLink = false,
  title = "Featured Projects",
  subtitle = "A selection of my recent work and personal projects",
}: ProjectsSectionProps) {
  const items =
    typeof limit === "number" ? projects.slice(-limit).reverse() : projects;

  return (
    <section id="projects" className="scroll-mt-24 px-6 py-20 md:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="text-brand mb-3 text-sm font-medium tracking-[0.2em] uppercase">
            Work
          </p>
          <h2 className="mb-4 text-4xl font-medium tracking-tight md:text-5xl">
            {title}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl text-lg">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {showMoreLink ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mt-12 flex justify-center md:mt-14"
          >
            <Link
              href="/projects"
              className="border-border text-foreground hover:border-brand hover:text-brand inline-flex items-center gap-2 rounded-full border px-6 py-2.5 text-sm font-medium transition-colors"
            >
              More projects
              <ArrowUpRight className="size-4" />
            </Link>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
