export const serverConnection = {
  name: "Torre dos Jogos",
  host: "n3.mines.host",
  port: "16270",
};

export function getConnectionAddress(): string {
  return `${serverConnection.host}:${serverConnection.port}`;
}
