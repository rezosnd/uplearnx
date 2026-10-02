import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UPlearnx | Expert PMP® Certification Support & Guidance",
  description: "Get expert PMP® certification support with application guidance, preparation resources, dedicated mentorship, and a 100% risk-free Pay After Pass model.",
  keywords: ["PMP", "PMP Certification", "Project Management", "UPlearnx", "PMP Mentorship", "PMP Support", "Pay After Pass"],
  openGraph: {
    title: "UPlearnx | Expert PMP® Certification Support",
    description: "Get expert PMP® certification support with application guidance, preparation resources, dedicated mentorship, and a 100% risk-free Pay After Pass model.",
    url: "https://uplearnx.com",
    siteName: "UPlearnx",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UPlearnx | Expert PMP® Certification Support",
    description: "Get expert PMP® certification support with application guidance, preparation resources, dedicated mentorship, and a 100% risk-free Pay After Pass model.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#F8FAFC] overflow-x-hidden">{children}</body>
    </html>
  );
}
