import type { Metadata } from "next";
import { Orbitron, Rajdhani } from "next/font/google";
import { siteConfig } from "@/data/server-config";
import { absoluteUrl, siteUrl } from "@/lib/paths";
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

const ogTitle = `${siteConfig.name} — ${siteConfig.tagline}`;
const ogDescription =
  "Servidor brasileiro de Project Zomboid — PvP Season em Muldraugh, KY. 3x XP, 60+ mods, safehouses sagradas e hordas implacáveis.";

const facebookAppId = siteConfig.facebookAppId.trim();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${ogTitle} | Project Zomboid`,
  description: ogDescription,
  ...(facebookAppId
    ? { other: { "fb:app_id": facebookAppId } }
    : {}),
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
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: siteConfig.name,
    title: ogTitle,
    description: ogDescription,
    images: [
      {
        url: absoluteUrl("/images/og-image.jpg"),
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.tagline}`,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: ogDescription,
    images: [absoluteUrl("/images/og-image.jpg")],
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
