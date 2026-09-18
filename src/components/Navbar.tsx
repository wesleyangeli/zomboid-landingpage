import Image from "next/image";
import { navLinks, siteConfig } from "@/data/server-config";
import { assetPath } from "@/lib/paths";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-toxic-500/10 bg-void-950/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href={assetPath("/")} className="group flex items-center gap-3">
          <Image
            src={assetPath("/images/logo.png")}
            alt={`${siteConfig.name} logo`}
            width={44}
            height={44}
            className="rounded-full ring-1 ring-toxic-500/30 transition group-hover:ring-toxic-400/60"
            priority
          />
          <div className="hidden sm:block">
            <p className="font-display text-base font-bold tracking-widest text-toxic-400">
              {siteConfig.name.toUpperCase()}
            </p>
            <p className="text-sm font-semibold text-zombie-200">{siteConfig.tagline}</p>
          </div>
        </a>

        <ul className="flex items-center gap-1 sm:gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded px-2 py-1 text-sm font-bold text-zombie-100 transition hover:text-toxic-400 sm:text-base"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
