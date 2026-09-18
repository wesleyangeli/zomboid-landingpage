export const serverConnection = {
  name: "Torre dos Jogos",
  host: "sth-0.southhost.com.br",
  port: "16270",
};

/** Códigos de convite — hardcoded para acesso à conexão do servidor */
export const inviteCodes = [
  "TORRE-7K9M2X",
  "TORRE-P4N8Q1",
  "TORRE-W3R6T5",
  "TORRE-H9J2L8",
  "TORRE-F5D7C4",
  "TORRE-B6V1N3",
  "TORRE-Z8X4M2",
  "TORRE-G7Y5K9",
  "TORRE-A2S6W1",
  "TORRE-E4R8P3",
] as const;

export const INVITE_STORAGE_KEY = "torre-invite-verified";

export function normalizeInviteCode(code: string): string {
  return code.trim().toUpperCase().replace(/\s+/g, "");
}

export function isValidInviteCode(code: string): boolean {
  const normalized = normalizeInviteCode(code);
  return inviteCodes.includes(normalized as (typeof inviteCodes)[number]);
}

export function getConnectionAddress(): string {
  return `${serverConnection.host}:${serverConnection.port}`;
}
