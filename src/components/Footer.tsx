import Image from "next/image";
import { siteConfig } from "@/data/server-config";

export default function Footer() {
  return (
    <footer className="border-t border-toxic-500/10 bg-void-950 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 sm:px-6">
        <Image
          src="/images/logo.png"
          alt={`${siteConfig.name} logo`}
          width={64}
          height={64}
          className="rounded-full opacity-80"
        />
        <p className="text-center font-display text-lg font-bold text-toxic-400">
          Bom jogo a todos! 🧟‍♂️🔫
        </p>
        <p className="text-sm text-zombie-400">
          — {siteConfig.team} · {siteConfig.name} {siteConfig.tagline}
        </p>
        <p className="text-xs text-zombie-600">
          Landing page estática · Dados de conexão serão divulgados em breve
        </p>
      </div>
    </footer>
  );
}
