"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
};

export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group border-border bg-card flex flex-col overflow-hidden rounded-2xl border transition-colors duration-300 hover:border-border/80"
    >
      <div className="border-border bg-muted/40 flex items-center gap-1.5 border-b px-3 py-2.5">
        <span className="size-2 rounded-full bg-red-400/80" />
        <span className="size-2 rounded-full bg-amber-400/80" />
        <span className="size-2 rounded-full bg-emerald-400/80" />
        <span className="text-muted-foreground ml-2 truncate text-[11px] tracking-wide">
          {project.title}
        </span>
      </div>

      <div className="bg-muted relative aspect-16/10 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top-left transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="space-y-2">
          <h3 className="text-foreground text-xl leading-snug font-semibold tracking-tight">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-brand-soft text-brand inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.github || project.demo ? (
          <div className="mt-auto flex gap-2 pt-1">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border-border text-foreground hover:bg-muted/70 inline-flex flex-1 items-center justify-center gap-2 rounded-full border px-3 py-2.5 text-sm font-medium transition-colors"
              >
                <Github className="size-4" />
                Code
              </a>
            ) : null}
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-foreground text-background inline-flex flex-1 items-center justify-center gap-2 rounded-full px-3 py-2.5 text-sm font-medium transition-opacity hover:opacity-90"
              >
                Live
                <ArrowUpRight className="size-4" />
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}
