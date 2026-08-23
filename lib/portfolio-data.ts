export const navItems = [
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
] as const;

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Paingthuyakyaw",
    variant: "default" as const,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/paing-thura-kyaw-0584b6259/",
    variant: "linkedin" as const,
  },
  {
    label: "Email",
    href: "mailto:paingthurakyaw@example.com",
    variant: "default" as const,
  },
] as const;

export const expertise = [
  {
    icon: "frontend" as const,
    title: "Frontend Development",
    description:
      "Building responsive and interactive web applications with React.js and modern web technologies.",
  },
  {
    icon: "mobile" as const,
    title: "Mobile Development",
    description:
      "Creating cross-platform mobile apps with React Native for iOS and Android.",
  },
  {
    icon: "backend" as const,
    title: "Backend Development",
    description:
      "Developing scalable server-side applications and RESTful APIs with Node.js.",
  },
];

/** Logos for the skills marquee (Simple Icons slugs → cdn.simpleicons.org) */
export const techLogos = [
  { name: "React", slug: "react" },
  { name: "TypeScript", slug: "typescript" },
  { name: "JavaScript", slug: "javascript" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "Redux", slug: "redux" },
  { name: "Vite", slug: "vite" },
  { name: "React Native", slug: "react" },
  { name: "Expo", slug: "expo" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Express", slug: "express" },
  { name: "GraphQL", slug: "graphql" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "Prisma", slug: "prisma" },
  { name: "Docker", slug: "docker" },
  { name: "AWS", slug: "amazonaws" },
  { name: "Vercel", slug: "vercel" },
  { name: "Git", slug: "git" },
  { name: "GitHub", slug: "github" },
] as const;

export const experience = [
  {
    year: "2024 - Present",
    title: "Frontend Team Lead",
    company: "Grumman Holdings Company",
    description:
      "Leading frontend development for enterprise currency-exchange platforms — React, Next.js, Electron desktop apps, and a React Native tablet app, with mentoring and code reviews.",
  },
  {
    year: "2024 - 2026",
    title: "Full-Stack Developer",
    company: "Root.Studio Myanmar",
    description:
      "Building management systems and dashboards end-to-end with React, Next.js, Node.js, and Express — APIs, reusable UI, and cross-team delivery.",
  },
  {
    year: "2022 - 2023",
    title: "Frontend Developer",
    company: "Xsphere Company",
    description:
      "Developed React and Next.js apps and interactive dashboards with strong performance, SEO, and real-time features via WebSockets.",
  },
  {
    year: "2021",
    title: "Frontend Developer",
    company: "MMS One IT Solution",
    description:
      "Started in real-world projects, building foundational frontend skills and collaborating with senior developers through the full development lifecycle.",
  },
];

export const projects: {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}[] = [
  {
    title: "Ticket Admin Dashboard",
    description:
      "Admin dashboard for managing event ticket listings, users, orders, and organizations.",
    image: "/project/ticket.png",
    tags: ["React", "TypeScript", "Admin Dashboard"],
    github: "https://github.com/Paingthuyakyaw/ticket-admin",
    demo: "https://ticket-admin-gamma.vercel.app/",
  },
  {
    title: "Nexlynk",
    description:
      "Online Japanese language learning platform connecting learners with schools and educators — JLPT courses, interactive lessons, and progress tracking.",
    image: "/project/nexlynk.webp",
    tags: ["Next.js", "TypeScript", "EdTech", "SEO"],
    demo: "https://www.nexlynk.com/en",
  },
];

export const contactInfo = [
  {
    icon: "email" as const,
    label: "Email",
    value: "paingthurakyaw@example.com",
    href: "mailto:paingthurakyaw@example.com",
  },
  {
    icon: "linkedin" as const,
    label: "LinkedIn",
    value: "linkedin.com/in/paing-thura-kyaw-0584b6259",
    href: "https://www.linkedin.com/in/paing-thura-kyaw-0584b6259/",
  },
  {
    icon: "github" as const,
    label: "GitHub",
    value: "github.com/Paingthuyakyaw",
    href: "https://github.com/Paingthuyakyaw",
  },
  {
    icon: "location" as const,
    label: "Location",
    value: "Yangon, Myanmar",
    href: null,
  },
];
