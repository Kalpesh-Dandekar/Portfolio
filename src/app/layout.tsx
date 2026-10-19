import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Kalpesh Dandekar — Software Engineer",
    template: "%s — Kalpesh Dandekar",
  },
  description: "Full-stack engineer building AI-powered systems and thoughtful digital products. Explore selected engineering work by Kalpesh Dandekar.",
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
    card: "summary_large_image",
    title: "Kalpesh Dandekar — Software Engineer",
    description: "Full-stack engineer building AI-powered systems and thoughtful digital products.",
  },
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
