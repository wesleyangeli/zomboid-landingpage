export const siteConfig = {
  name: "Servidor Torre",
  tagline: "PvP Season",
  subtitle: "Sobreviva. Lute. Domine.",
  location: "Muldraugh, KY",
  team: "Equipe Torre",
};

export const stats = [
  { label: "Players Max", value: "10" },
  { label: "XP Global", value: "3.0x" },
  { label: "Mods Ativos", value: "60+" },
  { label: "População", value: "Alta" },
];

export const highlights = [
  {
    icon: "⚔️",
    title: "PvP Ativado",
    description:
      "Combate player vs player com dano baixo — corpo a corpo e armas de fogo — para batalhas mais longas e estratégicas.",
  },
  {
    icon: "🧟",
    title: "Horda Implacável",
    description:
      "População alta (1.2x, pico 1.5x em 28 dias). Apenas shamblers, transmissão por saliva, morte em 2–3 dias.",
  },
  {
    icon: "🏠",
    title: "Safehouses Sagradas",
    description:
      "Até 3 por player, sem invasão ou roubo. Remoção automática após 72h sem visita.",
  },
  {
    icon: "🚗",
    title: "Veículos & Mods",
    description:
      "Veículos ativados, consumo 5x, spawn baixo. Mais de 60 mods — armas, veículos, eventos e utilidades.",
  },
];

export type ConfigSection = {
  id: string;
  icon: string;
  title: string;
  items: { label: string; value: string }[];
};

export const configSections: ConfigSection[] = [
  {
    id: "pvp",
    icon: "⚔️",
    title: "PvP",
    items: [
      { label: "Status", value: "Ativado — machucar e matar outros players" },
      { label: "Dano corpo a corpo", value: "Baixo" },
      { label: "Dano armas de fogo", value: "Baixo" },
    ],
  },
  {
    id: "zombies",
    icon: "🧟",
    title: "Zumbis",
    items: [
      { label: "População", value: "Alta (1.2x, pico 1.5x em 28 dias)" },
      { label: "Tipo", value: "Apenas shamblers (padrão)" },
      { label: "Transmissão", value: "Apenas saliva" },
      { label: "Morte pós-infecção", value: "2 a 3 dias" },
      { label: "Memória / Visão / Audição", value: "Padrão" },
      { label: "Arrombamento", value: "Padrão" },
      { label: "Fake dead", value: "Desativado (padrão)" },
      { label: "Respawn", value: "6 horas" },
      { label: "Migração", value: "12 horas" },
      { label: "Spawn em área de players", value: "Desativado (padrão)" },
    ],
  },
  {
    id: "safehouses",
    icon: "🏠",
    title: "Safehouses",
    items: [
      { label: "Criação", value: "Players podem criar safehouses" },
      { label: "Máximo por player", value: "3 safehouses" },
      { label: "Remoção automática", value: "72 horas sem visita" },
      { label: "Invasão", value: "Desativada (SafehouseAllowTrepass=true)" },
      { label: "Roubo", value: "Desativado (SafehouseAllowLoot=false)" },
      { label: "Dano por fogo", value: "Padrão (não danifica)" },
      { label: "Respawn na safehouse", value: "Permitido (padrão)" },
      { label: "Tamanho máximo", value: "20.000 (padrão)" },
    ],
  },
  {
    id: "vehicles",
    icon: "🚗",
    title: "Veículos",
    items: [
      { label: "Status", value: "Ativados (padrão)" },
      { label: "Spawn", value: "Baixo" },
      { label: "Tanque inicial", value: "Baixo" },
      { label: "Consumo gasolina", value: "5.0x" },
      { label: "Carros trancados", value: "Às vezes (padrão)" },
      { label: "Alarmes", value: "Às vezes (padrão)" },
      { label: "Reboque", value: "Ativado (padrão)" },
      { label: "UPnP", value: "Desativado (padrão)" },
    ],
  },
  {
    id: "loot",
    icon: "🎒",
    title: "Loot & Sobrevivência",
    items: [
      { label: "Loot geral", value: "Padrão (escasso)" },
      { label: "Comida", value: "Padrão" },
      { label: "Armas de fogo", value: "Padrão" },
      { label: "Água e energia", value: "Desligam entre 0–30 dias (modificador: 14 dias)" },
      { label: "Comida estraga", value: "Normal (padrão)" },
      { label: "Geladeira", value: "Normal (padrão)" },
      { label: "Saqueamento", value: "Impede respawn de loot (padrão)" },
      { label: "Itens no chão", value: "Não somem (0 horas)" },
      { label: "Corpos", value: "Removidos após 12 horas" },
      { label: "Sangue", value: "Removido após 1 dia" },
      { label: "Fogueiras", value: "Duram até 12 horas" },
      { label: "Geradores", value: "Consumo padrão, spawn raro" },
    ],
  },
  {
    id: "skills",
    icon: "🧠",
    title: "Skills & Progressão",
    items: [
      { label: "XP global", value: "3.0x (todas as skills)" },
      { label: "Leitura de livros", value: "0.1 minuto por página" },
      { label: "Cooldown literatura", value: "45 dias (padrão)" },
      { label: "Receitas visíveis", value: "Ativado (mesmo sem aprender)" },
    ],
  },
  {
    id: "farming",
    icon: "🐄",
    title: "Animais & Fazenda",
    items: [
      { label: "Envelhecimento", value: "Muito devagar" },
      { label: "Gestação", value: "Normal (padrão)" },
      { label: "Crescimento plantas", value: "2.0x" },
      { label: "Colheita", value: "3.0x" },
      { label: "Resiliência", value: "Alta" },
      { label: "Estações", value: "Afetam plantio (padrão)" },
      { label: "Predadores meta", value: "Desativado" },
      { label: "Máximo de ratos", value: "10" },
      { label: "Feno/grama", value: "Rebrota em 240 horas (padrão)" },
    ],
  },
  {
    id: "map",
    icon: "🗺️",
    title: "Mapa & Interface",
    items: [
      { label: "Mapa", value: "Muldraugh, KY (padrão)" },
      { label: "Mini-mapa / Mapa mundial", value: "Ativados (padrão)" },
      { label: "Mapa conhecido", value: "Todo conhecido ao iniciar" },
      { label: "Jogadores no mapa", value: "Apenas amigos" },
      { label: "Coordenadas", value: "Ocultas (padrão)" },
      { label: "Scoreboard", value: "Desativado" },
      { label: "Nomes", value: "Apenas ao passar o mouse (padrão)" },
      { label: "Jogadores atrás", value: "Ocultos (padrão)" },
    ],
  },
  {
    id: "chat",
    icon: "💬",
    title: "Chat & Comunicação",
    items: [
      { label: "Chat global", value: "Ativado (padrão)" },
      { label: "VOIP", value: "Ativado (padrão)" },
      { label: "Distância VOIP", value: "Mín: 20 | Máx: 100.000" },
      { label: "Áudio 3D", value: "Ativado (padrão)" },
      { label: "Limite mensagem", value: "200 caracteres (padrão)" },
      { label: "Slow mode", value: "3 segundos (padrão)" },
    ],
  },
  {
    id: "general",
    icon: "⚙️",
    title: "Configurações Gerais",
    items: [
      { label: "Máximo de players", value: "10" },
      { label: "Ping limit", value: "400ms" },
      { label: "Anti-cheat", value: "Ativado" },
      { label: "Fogo", value: "Desativado (exceto fogueiras)" },
      { label: "Sono", value: "Desativado (SleepAllowed=false)" },
      { label: "Nocaute", value: "Desativado (KnockedDown=false)" },
    ],
  },
];

export const modCategories = [
  {
    category: "Veículos",
    mods: ["VFExpansion", "KI5", "Caminhões militares", "Carros clássicos"],
  },
  {
    category: "Armas",
    mods: ["NiksMilitaryStuff", "VFE (militares/policiais)"],
  },
  {
    category: "Utilidades",
    mods: ["NeatUI", "ProximityInventory", "SafeUserLogin", "MultiSafehouse"],
  },
  {
    category: "Construção",
    mods: ["Machinery", "HydeCo Garage Doors", "CodeLock"],
  },
  {
    category: "Sobrevivência",
    mods: ["TakeABathAndShower", "ProjectCook", "Reading+"],
  },
  {
    category: "Eventos",
    mods: ["AegisEvents (cerco, tempestades, helicópteros, airdrops)"],
  },
];

export const rules = [
  "PvP é opcional — respeite quem está fora.",
  "Safehouses são sagradas — sem roubo.",
  "Sem cheat — anti-cheat ativo.",
  "Respeite o próximo no chat e VOIP.",
  "Divirta-se e sobreviva!",
];

export const navLinks = [
  { href: "#destaques", label: "Destaques" },
  { href: "#configuracoes", label: "Configurações" },
  { href: "#mods", label: "Mods" },
  { href: "#regras", label: "Regras" },
];
