import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProjectsSection } from "@/components/projects-section";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Projects | Paing Thura Kyaw",
  description:
    "Featured web and mobile projects by Paing Thura Kyaw — Next.js, React Native, and client work.",
};

export default function ProjectsPage() {
  return (
    <main className="pt-20">
      <div className="mx-auto max-w-6xl px-6 pt-6 md:px-12">
        <Link
          href="/"
          className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm font-medium transition-colors"
        >
          <ArrowLeft className="size-4" />
          Back to home
        </Link>
      </div>
      <ProjectsSection
        title="All Projects"
        subtitle="Web apps, dashboards, and mobile work I've shipped"
        showMoreLink={false}
      />
      <Footer />
    </main>
  );
}
