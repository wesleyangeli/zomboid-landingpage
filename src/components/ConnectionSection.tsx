"use client";

import { useState } from "react";
import {
  getConnectionAddress,
  serverConnection,
} from "@/data/server-connection";

function CopyField({
  id,
  label,
  value,
  mono = false,
}: {
  id: string;
  label: string;
  value: string;
  mono?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-bold uppercase tracking-wider text-toxic-500"
      >
        {label}
      </label>
      <div className="flex gap-2">
        <input
          id={id}
          type="text"
          readOnly
          value={value}
          className={`min-w-0 flex-1 rounded-lg border border-toxic-500/30 bg-void-950 px-4 py-3 font-semibold text-white focus:outline-none ${
            mono ? "font-mono" : ""
          }`}
        />
        <button
          type="button"
          onClick={() => void handleCopy()}
          title={copied ? "Copiado!" : "Copiar"}
          aria-label={`Copiar ${label.toLowerCase()}`}
          className="shrink-0 rounded-lg border border-toxic-500/30 bg-void-900/60 px-4 py-3 text-sm font-bold text-toxic-300 transition hover:border-toxic-500/60 hover:bg-void-900"
        >
          {copied ? "✓" : "Copiar"}
        </button>
      </div>
    </div>
  );
}

export default function ConnectionSection() {
  const address = getConnectionAddress();

  return (
    <section id="conectar" className="relative py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
            Conectar ao Servidor
          </h2>
          <p className="mt-3 text-lg font-semibold text-zombie-200 sm:text-xl">
            Dados públicos — entre quando quiser
          </p>
        </div>

        <div className="space-y-6 rounded-xl border border-toxic-500/20 bg-void-900/60 p-6 backdrop-blur-sm sm:p-8">
          <div className="space-y-4">
            <CopyField
              id="server-name"
              label="Nome do servidor"
              value={serverConnection.name}
            />
            <CopyField
              id="server-host"
              label="IP / Domínio"
              value={serverConnection.host}
              mono
            />
            <CopyField
              id="server-port"
              label="Porta"
              value={serverConnection.port}
              mono
            />
          </div>

          <div className="rounded-lg border border-toxic-500/20 bg-toxic-500/5 p-4">
            <p className="text-sm font-bold uppercase tracking-wider text-toxic-400">
              Endereço completo
            </p>
            <p className="mt-1 font-mono text-xl font-bold text-toxic-300">
              {address}
            </p>
          </div>

          <div className="rounded-lg border border-zombie-600/30 bg-void-950/40 p-4 text-sm font-semibold text-zombie-300">
            <p className="font-bold text-zombie-100">Como conectar:</p>
            <ol className="mt-2 list-inside list-decimal space-y-1">
              <li>Abra o Project Zomboid</li>
              <li>
                Vá em <strong>Join</strong> → <strong>IP do servidor</strong>
              </li>
              <li>
                Cole: <strong className="text-toxic-400">{address}</strong>
              </li>
              <li>
                Selecione o servidor <strong>{serverConnection.name}</strong>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
