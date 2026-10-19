import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kalpesh Dandekar — Portfolio",
  description: "The personal portfolio of software engineer Kalpesh Dandekar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
