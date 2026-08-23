export const navItems = [
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
] as const;

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/paingthurakyaw",
    variant: "default" as const,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/paingthurakyaw",
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

export const techStack: Record<string, string[]> = {
  "Frontend Development": [
    "React.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Redux",
    "Context API",
    "React Router",
    "Next.js",
    "Vite",
    "Webpack",
  ],
  "Mobile Development": [
    "React Native",
    "Expo",
    "iOS Development",
    "Android Development",
    "React Navigation",
    "AsyncStorage",
    "Push Notifications",
    "Native Modules",
  ],
  "Backend Development": [
    "Node.js",
    "Express.js",
    "RESTful APIs",
    "GraphQL",
    "JWT Authentication",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Mongoose",
    "Prisma",
  ],
  "Tools & DevOps": [
    "Git/GitHub",
    "Docker",
    "AWS",
    "Vercel",
    "Netlify",
    "Postman",
    "VS Code",
    "npm/yarn",
    "CI/CD",
    "Agile/Scrum",
  ],
};

export const experience = [
  {
    year: "2023 - Present",
    title: "Senior Full-Stack Developer",
    description:
      "Leading development of web and mobile applications using React ecosystem",
  },
  {
    year: "2021 - 2023",
    title: "Full-Stack Developer",
    description:
      "Built scalable applications with React, React Native, and Node.js",
  },
  {
    year: "2019 - 2021",
    title: "Frontend Developer",
    description: "Developed responsive web applications and mobile interfaces",
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
    value: "linkedin.com/in/paingthurakyaw",
    href: "https://linkedin.com/in/paingthurakyaw",
  },
  {
    icon: "github" as const,
    label: "GitHub",
    value: "github.com/paingthurakyaw",
    href: "https://github.com/paingthurakyaw",
  },
  {
    icon: "location" as const,
    label: "Location",
    value: "Yangon, Myanmar",
    href: null,
  },
];
