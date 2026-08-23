"use client";

import { motion } from "motion/react";
import { Code2, Smartphone, Server } from "lucide-react";
import { expertise } from "@/lib/portfolio-data";

const icons = {
  frontend: Code2,
  mobile: Smartphone,
  backend: Server,
};

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-20 md:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-medium tracking-tight md:text-5xl">
            About Me
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            I&apos;m a passionate full-stack developer specializing in building
            exceptional digital experiences. With expertise in modern JavaScript
            frameworks and technologies, I bring ideas to life through clean,
            efficient code.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {expertise.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-border hover:border-foreground/20 rounded-lg border p-6 transition-all hover:shadow-md"
              >
                <div className="bg-brand-soft mb-4 flex size-12 items-center justify-center rounded-lg">
                  <Icon className="text-brand size-6" />
                </div>
                <h3 className="mb-2 text-xl font-medium">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
