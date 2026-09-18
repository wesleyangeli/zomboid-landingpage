import Image from "next/image";
import { siteConfig } from "@/data/server-config";
import { assetPath } from "@/lib/paths";

export default function Footer() {
  return (
    <footer className="border-t border-toxic-500/10 bg-void-950 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 sm:px-6">
        <Image
          src={assetPath("/images/logo.png")}
          alt={`${siteConfig.name} logo`}
          width={64}
          height={64}
          className="rounded-full opacity-80"
        />
        <p className="text-center font-display text-xl font-bold text-toxic-400 sm:text-2xl">
          Bom jogo a todos! 🧟‍♂️🔫
        </p>
        <p className="text-base font-semibold text-zombie-200 sm:text-lg">
          — {siteConfig.team} · {siteConfig.name} {siteConfig.tagline}
        </p>
        <p className="text-sm font-medium text-zombie-400 sm:text-base">
          Acesso ao servidor mediante código de convite
        </p>
      </div>
    </footer>
  );
}
