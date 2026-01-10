import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Backend Engineer | Portfolio",
  description:
    "Backend engineer building production-ready systems with Django, Express, and PostgreSQL.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col">
        <Navbar />
        <main className="flex-grow max-w-6xl mx-auto px-6 py-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
