import { rules } from "@/data/server-config";

export default function Rules() {
  return (
    <section id="regras" className="relative py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
            Regras Rápidas
          </h2>
          <p className="mt-3 text-zombie-300">
            Respeite a comunidade e sobreviva com honra
          </p>
        </div>

        <ol className="space-y-4">
          {rules.map((rule, index) => (
            <li
              key={rule}
              className="flex items-start gap-4 rounded-xl border border-blood-500/20 bg-blood-950/20 px-5 py-4"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blood-600/30 font-display text-sm font-bold text-blood-400">
                {index + 1}
              </span>
              <p className="pt-1 text-zombie-100">{rule}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
