import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://grahithrao.vercel.app"),
  title: "Grahith Rao | Artificial Intelligence & Machine Learning Engineer",
  description:
    "Portfolio of Grahith Rao — AI/ML Engineer building intelligent systems, computer vision pipelines, embedded hardware prototypes, and full-stack web applications.",
  keywords: [
    "Grahith Rao",
    "Grahith G Rao",
    "AI Engineer",
    "Machine Learning Engineer",
    "Computer Vision",
    "SignSpeak Gloves",
    "Deep Learning",
    "Mangaluru",
  ],
  authors: [{ name: "Grahith Rao", url: "https://grahithrao.vercel.app" }],
  openGraph: {
    title: "Grahith Rao | AI & Machine Learning Engineer",
    description:
      "Building intelligent solutions, crafting meaningful digital experiences, and transforming innovative ideas into real-world applications.",
    type: "website",
    locale: "en_US",
    url: "https://grahithrao.vercel.app",
    images: [
      {
        url: "/profile.jpg",
        width: 1024,
        height: 1024,
        alt: "Grahith Rao",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grahith Rao | AI & Machine Learning Engineer",
    description:
      "Building intelligent solutions, crafting meaningful digital experiences, and transforming innovative ideas into real-world applications.",
    images: ["/profile.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-[#F7FBFF] text-[#475569] selection:bg-[#BFDBFE] selection:text-[#102A43]`}>
        {children}
      </body>
    </html>
  );
}
