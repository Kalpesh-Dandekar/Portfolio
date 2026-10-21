import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  applicationName: "Kalpesh Dandekar Portfolio",
  title: {
    default: "Kalpesh Dandekar — Software Engineer",
    template: "%s — Kalpesh Dandekar",
  },
  description: "Software engineer building full-stack applications, intelligent systems, and AI-assisted products for real-world problems.",
  keywords: ["Kalpesh Dandekar", "Software Engineer", "Full-stack Developer", "AI Systems", "Next.js", "Portfolio"],
  authors: [{ name: "Kalpesh Dandekar" }],
  creator: "Kalpesh Dandekar",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: "Kalpesh Dandekar — Software Engineer",
    description: "Full-stack engineer building AI-powered systems and thoughtful digital products.",
    siteName: "Kalpesh Dandekar",
  },
  twitter: {
    card: "summary",
    title: "Kalpesh Dandekar — Software Engineer",
    description: "Full-stack engineer building AI-powered systems and thoughtful digital products.",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#090a08",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
