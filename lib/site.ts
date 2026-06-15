export const siteConfig = {
  name: "Paing Thura Kyaw",
  title: "Full Stack Developer",
  description:
    "Paing Thura Kyaw is a Full Stack Developer specializing in React, Node.js, and React Native. Crafting seamless web and mobile experiences.",
  shortDescription:
    "Full Stack Developer building seamless experiences with React, Node.js, and React Native.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://paing-thura-kyaw.vercel.app",
  keywords: [
    "Paing Thura Kyaw",
    "Paing Thura Kyaw Portfolio",
    "Paing Thura Kyaw Developer",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "React Native Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Web Developer",
    "Mobile Developer",
    "Portfolio",
    "React",
    "Node.js",
    "React Native",
  ],
  author: {
    name: "Paing Thura Kyaw",
    role: "Full Stack Developer",
  },
  locale: "en_US",
  generator: "Next.js",
  referrer: "origin-when-cross-origin" as const,
  manifest: "/manifest.json",
  category: "technology",
  openGraphImage: {
    url: "/favicon.ico",
    alt: "Paing Thura Kyaw",
  },
  twitterImage: {
    url: "/favicon.ico",
    alt: "Paing Thura Kyaw Portfolio",
  },
} as const;
