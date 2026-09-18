"use client";

import { useEffect, useState } from "react";
import {
  getConnectionAddress,
  INVITE_STORAGE_KEY,
  isValidInviteCode,
  normalizeInviteCode,
  serverConnection,
} from "@/data/invite-codes";

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

export default function InviteSection() {
  const [unlocked, setUnlocked] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem(INVITE_STORAGE_KEY);
    if (saved === "true") {
      setUnlocked(true);
    }
    setLoading(false);
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (isValidInviteCode(code)) {
      localStorage.setItem(INVITE_STORAGE_KEY, "true");
      setUnlocked(true);
      setCode("");
      return;
    }

    setError("Código inválido. Verifique e tente novamente.");
  };

  const handleLogout = () => {
    localStorage.removeItem(INVITE_STORAGE_KEY);
    setUnlocked(false);
    setCode("");
    setError("");
  };

  const address = getConnectionAddress();

  return (
    <section id="convite" className="relative py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
            Acesso ao Servidor
          </h2>
          <p className="mt-3 text-lg font-semibold text-zombie-200 sm:text-xl">
            Informações de conexão liberadas apenas com convite
          </p>
        </div>

        <div className="rounded-xl border border-toxic-500/20 bg-void-900/60 p-6 backdrop-blur-sm sm:p-8">
          {loading ? (
            <p className="text-center text-zombie-300">Carregando...</p>
          ) : unlocked ? (
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-2 text-toxic-400">
                <span className="h-2 w-2 rounded-full bg-toxic-400" />
                <span className="font-display text-sm font-bold uppercase tracking-wider">
                  Acesso liberado
                </span>
              </div>

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
                  <li>Vá em <strong>Join</strong> → <strong>IP do servidor</strong></li>
                  <li>Cole: <strong className="text-toxic-400">{address}</strong></li>
                  <li>Selecione o servidor <strong>{serverConnection.name}</strong></li>
                </ol>
              </div>

              <button
                type="button"
                onClick={handleLogout}
                className="w-full text-center text-sm font-semibold text-zombie-500 transition hover:text-zombie-300"
              >
                Sair / ocultar dados
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="text-center">
                <span className="text-4xl">🔒</span>
                <p className="mt-3 font-semibold text-zombie-200">
                  Digite seu código de convite para ver os dados de conexão.
                </p>
              </div>

              <div>
                <label
                  htmlFor="invite-code"
                  className="mb-2 block text-sm font-bold uppercase tracking-wider text-toxic-500"
                >
                  Código de convite
                </label>
                <input
                  id="invite-code"
                  type="text"
                  value={code}
                  onChange={(event) => {
                    setCode(normalizeInviteCode(event.target.value));
                    setError("");
                  }}
                  placeholder="TORRE-XXXXXX"
                  className="w-full rounded-lg border border-toxic-500/30 bg-void-950 px-4 py-3 font-mono text-lg font-bold uppercase tracking-wider text-white placeholder:text-zombie-600 focus:border-toxic-500 focus:outline-none focus:ring-1 focus:ring-toxic-500/50"
                  autoComplete="off"
                  spellCheck={false}
                />
              </div>

              {error && (
                <p className="rounded-lg border border-blood-500/30 bg-blood-950/30 px-4 py-3 text-center text-sm font-bold text-blood-400">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="w-full rounded-lg border border-toxic-500/40 bg-toxic-500/15 py-3 font-display text-base font-bold uppercase tracking-wide text-toxic-300 transition hover:bg-toxic-500/25 hover:text-toxic-200"
              >
                Validar convite
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
