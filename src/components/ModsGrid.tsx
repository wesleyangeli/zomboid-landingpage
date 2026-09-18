import { modCategories } from "@/data/server-config";

export default function ModsGrid() {
  return (
    <section id="mods" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
            Mods Ativos
          </h2>
          <p className="mt-3 text-zombie-300">
            Mais de 60 mods selecionados para a melhor experiência
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modCategories.map((cat) => (
            <article
              key={cat.category}
              className="rounded-xl border border-toxic-500/10 bg-void-900/50 p-6"
            >
              <h3 className="font-display text-lg font-bold text-toxic-400">
                {cat.category}
              </h3>
              <ul className="mt-4 space-y-2">
                {cat.mods.map((mod) => (
                  <li
                    key={mod}
                    className="flex items-center gap-2 text-sm text-zombie-200"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-toxic-500" />
                    {mod}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
