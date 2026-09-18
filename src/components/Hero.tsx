import Image from "next/image";
import { siteConfig, stats } from "@/data/server-config";
import { assetPath } from "@/lib/paths";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src={assetPath("/images/hero-bg.png")}
          alt=""
          fill
          priority
          className="object-cover opacity-40"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-void-950/60 via-void-950/80 to-void-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050807_75%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6">
        <div className="mb-8 flex justify-center">
          <Image
            src={assetPath("/images/logo.png")}
            alt={`${siteConfig.name} logo`}
            width={160}
            height={160}
            priority
            className="animate-pulse-glow rounded-full drop-shadow-[0_0_30px_rgba(57,255,20,0.4)]"
          />
        </div>

        <p className="mb-2 font-display text-base font-bold tracking-[0.35em] text-toxic-400 sm:text-lg">
          PROJECT ZOMBOID
        </p>

        <h1 className="font-display text-4xl font-black uppercase leading-tight tracking-wide text-white sm:text-6xl lg:text-7xl">
          {siteConfig.name}
          <span className="mt-2 block bg-gradient-to-r from-toxic-400 to-emerald-300 bg-clip-text text-transparent">
            {siteConfig.tagline}
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-xl font-bold text-zombie-100 sm:text-2xl">
          {siteConfig.subtitle}
        </p>
        <p className="mt-2 text-base font-semibold text-zombie-200 sm:text-lg">
          {siteConfig.location} · Season PvP · Comunidade BR
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-toxic-500/20 bg-void-900/60 px-5 py-3 backdrop-blur-sm"
            >
              <p className="font-display text-3xl font-black text-toxic-400">
                {stat.value}
              </p>
              <p className="text-sm font-bold uppercase tracking-wider text-zombie-200">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#convite"
            className="inline-flex items-center gap-2 rounded-full border border-toxic-500/40 bg-toxic-500/10 px-6 py-3 text-base font-bold text-toxic-300 transition hover:bg-toxic-500/20 hover:text-toxic-100"
          >
            <span className="text-lg">🔒</span>
            Tenho convite — conectar
          </a>
          <a
            href="#configuracoes"
            className="inline-flex items-center rounded-full border border-toxic-500/40 bg-toxic-500/10 px-6 py-3 text-base font-bold text-toxic-300 transition hover:bg-toxic-500/20 hover:text-toxic-100"
          >
            Ver configurações →
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <a href="#destaques" className="text-zombie-500 hover:text-toxic-400">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
