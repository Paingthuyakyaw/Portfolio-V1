import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavLayout from "@/layout/nav-layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Paing Thura Kyaw",
  other: {
    "google-site-verification": "sanJwsQoeoige0WpxnZbOAiC69i0CLDf6SfMWuzSFCk",
  },
  // manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "any" },
    ],
    apple: "/apple-icon.png",
  },
  description:
    "A passionate Frontend Developer specializing in modern web technologies like React, Next.js, Node.js and Related Framework. Explore my portfolio to see my latest work.",
  generator: "Next.js",
  applicationName: "Portfolio",
  referrer: "origin-when-cross-origin",
  // metadataBase: new URL("https://www.rootstudio.asia"),
  keywords: [
    "Paing Thura Kyaw",
    "Paing Thura Kyaw FullStack Developer",
    "Paing Thura Kyaw Frontend Developer",
  ],
  category: "Portfolio",
  authors: [{ name: "Paing Thura Kyaw" }],
  creator: "Paing Thura Kyaw",
  publisher: "Paing Thura Kyaw",
  openGraph: {
    title: "Paing Thura Kyaw",
    description:
      "A passionate FullStack Developer specializing in modern web technologies like React, Next.js, Node.js and Related Frameworks. Explore my portfolio to see my latest work.",
    // url: "https://www.rootstudio.asia",
    siteName: "Paing Thura Kyaw",
    images: [
      {
        url: "",
        alt: "Paing Thura Kyaw",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paing Thura Kyaw",
    description:
      "A passionate Frontend Developer specializing in modern web technologies like React, Next.js, Node.js and Related Framework. Explore my portfolio to see my latest work.",
    creator: "Paing Thura Kyaw",
    images: {
      url: "",
      alt: "Paing Thura Kyaw",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem("heroui-theme") || "system";
                var resolved = theme === "system"
                  ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
                  : theme;
                document.documentElement.classList.add(resolved);
                document.documentElement.setAttribute("data-theme", resolved);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <NavLayout />
        {children}
      </body>
    </html>
  );
}
