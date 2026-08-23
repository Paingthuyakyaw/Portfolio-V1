"use client";

import { motion } from "motion/react";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { Card } from "@heroui/react";
import { contactInfo } from "@/lib/portfolio-data";

const icons = {
  email: Mail,
  linkedin: Linkedin,
  github: Github,
  location: MapPin,
};

export function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-section-muted scroll-mt-24 px-6 py-20 md:px-12"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-medium tracking-tight md:text-5xl">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg">
            I&apos;m always open to new opportunities and interesting projects.
            Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {contactInfo.map((info, index) => {
            const Icon = icons[info.icon];
            const content = (
              <>
                <div className="bg-brand-soft flex size-12 items-center justify-center rounded-lg transition-transform group-hover:scale-110">
                  <Icon className="text-brand size-6" />
                </div>
                <div className="flex-1">
                  <p className="text-muted-foreground text-sm">{info.label}</p>
                  <p className="text-foreground group-hover:text-brand transition-colors">
                    {info.value}
                  </p>
                </div>
              </>
            );

            return (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="transition-shadow hover:shadow-md">
                  <Card.Content className="p-6">
                    {info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4">{content}</div>
                    )}
                  </Card.Content>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
