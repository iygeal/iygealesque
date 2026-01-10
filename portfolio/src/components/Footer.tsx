export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-neutral-500 flex flex-col md:flex-row justify-between gap-4">
        <p>© {new Date().getFullYear()} Iygeal Anozie. Backend Engineer.</p>

        <p className="text-neutral-600">
          Django · Express · PostgreSQL · Cloud Deployments
        </p>
      </div>
    </footer>
  );
}
