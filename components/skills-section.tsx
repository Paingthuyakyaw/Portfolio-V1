"use client";

import { motion } from "motion/react";
import { Card } from "@heroui/react";
import { experience, techStack } from "@/lib/portfolio-data";

function SkillBadge({ children }: { children: string }) {
  return (
    <span className="bg-secondary text-secondary-foreground inline-flex items-center rounded-md px-3 py-1.5 text-sm font-medium">
      {children}
    </span>
  );
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="bg-section-muted scroll-mt-24 px-6 py-20 md:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-medium tracking-tight md:text-5xl">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies I work with on a regular basis
          </p>
        </motion.div>

        <div className="mb-20 grid gap-6 md:grid-cols-2">
          {Object.entries(techStack).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <Card className="h-full">
                <Card.Header>
                  <Card.Title className="text-xl">{category}</Card.Title>
                </Card.Header>
                <Card.Content>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <SkillBadge key={skill}>{skill}</SkillBadge>
                    ))}
                  </div>
                </Card.Content>
              </Card>
            </motion.div>
          ))}
        </div>

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
                className="border-brand-muted relative border-l-2 pl-8"
              >
                <div className="bg-brand-muted absolute top-0 -left-2 size-4 rounded-full" />
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
