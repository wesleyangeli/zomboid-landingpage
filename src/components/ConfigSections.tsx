import { configSections } from "@/data/server-config";

export default function ConfigSections() {
  return (
    <section id="configuracoes" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
            Configurações Completas
          </h2>
          <p className="mt-3 text-lg font-semibold text-zombie-200 sm:text-xl">
            Todas as regras e parâmetros do servidor documentados
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {configSections.map((section) => (
            <details
              key={section.id}
              className="group rounded-xl border border-toxic-500/10 bg-void-900/40 backdrop-blur-sm open:border-toxic-500/25 open:bg-void-900/70"
            >
              <summary className="flex cursor-pointer list-none items-center gap-3 px-5 py-4 font-display text-xl font-bold text-white transition hover:text-toxic-400 [&::-webkit-details-marker]:hidden">
                <span className="text-2xl">{section.icon}</span>
                {section.title}
                <svg
                  className="ml-auto h-5 w-5 text-toxic-500 transition group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <dl className="space-y-3 border-t border-toxic-500/10 px-5 py-5">
                {section.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-6"
                  >
                    <dt className="text-base font-bold text-toxic-500/90 sm:min-w-[40%]">
                      {item.label}
                    </dt>
                    <dd className="text-base font-semibold text-zombie-100 sm:text-right">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
