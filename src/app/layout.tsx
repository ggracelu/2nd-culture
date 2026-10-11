import type { Metadata } from "next";
import { Inter, Playfair_Display, Great_Vibes } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Second Culture Yogurt",
  description:
    "Double-strained homemade yogurt bowls celebrating multicultural flavors. Hyde Park, Chicago pop-ups.",
  openGraph: {
    title: "Second Culture Yogurt",
    description:
      "Double-strained homemade yogurt bowls celebrating multicultural flavors. Hyde Park, Chicago pop-ups.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${greatVibes.variable}`}>
      <body
        className="min-h-dvh antialiased selection:bg-[color:var(--brand-brick)] selection:text-[color:var(--brand-cream)]"
      >
        {children}
      </body>
    </html>
  );
}
