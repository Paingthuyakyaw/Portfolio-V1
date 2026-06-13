import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme-switcher";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 px-6 md:px-12 py-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-foreground transition-opacity hover:opacity-80"
        >
          PTK
        </Link>

        <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
          <ul className="flex items-center gap-4 sm:gap-6 md:gap-10">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
}
