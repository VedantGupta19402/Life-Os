import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LIFEOS — Personal Intelligence & Habit Trajectory System",
  description:
    "Understand today. Shape tomorrow. LIFEOS tracks ambient habit patterns, energy levels, and intent to build your 180-day personal trajectory.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <style>{`
          .font-serif {
            font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
          }
        `}</style>
      </head>
      <body className="min-h-full flex flex-col bg-[#F3EFE6] text-[#18211D]">
        {children}
      </body>
    </html>
  );
}
