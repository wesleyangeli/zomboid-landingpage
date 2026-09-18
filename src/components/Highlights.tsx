import { highlights } from "@/data/server-config";

export default function Highlights() {
  return (
    <section id="destaques" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
            Destaques do Servidor
          </h2>
          <p className="mt-3 text-zombie-300">
            O que torna a Torre uma experiência única de sobrevivência
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-xl border border-toxic-500/10 bg-void-900/50 p-6 backdrop-blur-sm transition hover:border-toxic-500/30 hover:bg-void-900/80"
            >
              <div className="absolute -right-4 -top-4 text-6xl opacity-10 transition group-hover:opacity-20">
                {item.icon}
              </div>
              <span className="text-3xl">{item.icon}</span>
              <h3 className="mt-4 font-display text-lg font-bold text-toxic-400">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zombie-300">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
