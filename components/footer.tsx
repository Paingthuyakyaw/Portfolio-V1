export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-border border-t px-6 py-8 md:px-12">
      <div className="text-muted-foreground mx-auto max-w-6xl text-center">
        <p>
          © {currentYear} Paing Thura Kyaw. Built with Next.js, TypeScript &
          Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
