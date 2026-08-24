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
      className="bg-section-muted scroll-mt-24 overflow-x-hidden px-4 py-16 sm:px-6 md:px-12 md:py-20"
    >
      <div className="mx-auto w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center sm:mb-16"
        >
          <h2 className="mb-4 text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
            Get In Touch
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl text-base sm:text-lg">
            I&apos;m always open to new opportunities and interesting projects.
            Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-3 sm:gap-6 md:grid-cols-2">
          {contactInfo.map((info, index) => {
            const Icon = icons[info.icon];
            const content = (
              <>
                <div className="bg-brand-soft flex size-10 shrink-0 items-center justify-center rounded-lg transition-transform group-hover:scale-110 sm:size-12">
                  <Icon className="text-brand size-5 sm:size-6" />
                </div>
                <div className="min-w-0 flex-1 overflow-hidden">
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    {info.label}
                  </p>
                  <p className="text-foreground group-hover:text-brand truncate text-sm transition-colors sm:text-base">
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
                className="min-w-0"
              >
                <Card className="overflow-hidden transition-shadow hover:shadow-md">
                  <Card.Content className="p-4 sm:p-6">
                    {info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex min-w-0 items-center gap-3 sm:gap-4"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                        {content}
                      </div>
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
