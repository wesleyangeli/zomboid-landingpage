import type { Metadata } from "next";
import { Orbitron, Rajdhani } from "next/font/google";
import { assetPath } from "@/lib/paths";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Servidor Torre — PvP Season | Project Zomboid",
  description:
    "Servidor brasileiro de Project Zomboid — PvP Season em Muldraugh, KY. 3x XP, 60+ mods, safehouses sagradas e hordas implacáveis.",
  keywords: [
    "Project Zomboid",
    "servidor",
    "PvP",
    "BR",
    "Torre",
    "zomboid",
    "survival",
  ],
  openGraph: {
    title: "Servidor Torre — PvP Season",
    description: "Sobreviva. Lute. Domine. Project Zomboid BR.",
    images: [assetPath("/images/logo.png")],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${orbitron.variable} ${rajdhani.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-void-950 text-lg font-semibold leading-relaxed text-zombie-100">
        {children}
      </body>
    </html>
  );
}
