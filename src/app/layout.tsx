import type { Metadata } from "next";
import { Orbitron, Rajdhani } from "next/font/google";
import { siteConfig, siteMeta } from "@/data/server-config";
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

const facebookAppId = siteConfig.facebookAppId.trim();
const ogImageAlt = `${siteMeta.ogTitle} — Project Zomboid BR`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteMeta.title,
  description: siteMeta.description,
  applicationName: siteConfig.name,
  ...(facebookAppId
    ? { other: { "fb:app_id": facebookAppId } }
    : {}),
  keywords: [...siteMeta.keywords],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: siteConfig.name,
    title: siteMeta.ogTitle,
    description: siteMeta.ogDescription,
    images: [
      {
        url: absoluteUrl("/images/og-image.jpg"),
        width: 1200,
        height: 630,
        alt: ogImageAlt,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.ogTitle,
    description: siteMeta.ogDescription,
    images: [absoluteUrl("/images/og-image.jpg")],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${orbitron.variable} ${rajdhani.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full bg-void-950 text-lg font-semibold leading-relaxed text-zombie-100"
      >
        {children}
      </body>
    </html>
  );
}
