export const siteConfig = {
  name: "Sara Rapouso",
  legalName: "Sara Rapouso Perita Contábil",
  title: "Sara Rapouso | Perita Contábil Judicial e Extrajudicial",
  description:
    "Perita Contábil CRC SC 38.308/O-0. Laudos periciais, pareceres técnicos, cálculos judiciais e trabalhistas, assistência técnica e assessoria contábil-financeira em Santa Catarina e todo o Brasil.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sararapouso.com.br",
  locale: "pt_BR",
  language: "pt-BR",
  email: "sararapouso.perita@outlook.com",
  phone: "+5547996840403",
  phoneDisplay: "(47) 9 9684-0403",
  crc: "CRC SC - 38.308/O-0",
  role: "Perita Contábil Judicial e Extrajudicial",
  region: "Santa Catarina",
  country: "BR",
  geo: {
    region: "BR-SC",
    placename: "Santa Catarina, Brasil",
    position: "-27.2429;-50.2189",
    icbm: "-27.2429, -50.2189",
  },
  keywords: [
    "perita contábil",
    "perícia contábil",
    "laudo pericial contábil",
    "perita contábil judicial",
    "perícia trabalhista",
    "cálculos judiciais",
    "assistência técnica contábil",
    "parecer técnico contábil",
    "perita contábil Santa Catarina",
    "perícia contábil SC",
    "liquidação de sentença",
    "apuração de haveres",
    "dissolução societária",
  ],
  social: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sara-rapouso-b3b124101/",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/sara.rapouso",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61590332765371",
    },
  ],
  nav: [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Perícias", href: "#pericias" },
    { label: "Atuação", href: "#atuacao" },
    { label: "Serviços", href: "#servicos" },
    { label: "Assessoria", href: "#assessoria" },
    { label: "Metodologia", href: "#metodologia" },
    { label: "FAQ", href: "#faq" },
    { label: "Contato", href: "#contato" },
  ],
} as const;

export type NavItem = (typeof siteConfig.nav)[number];

/** IDs das seções (sem #) — usados no scroll spy */
export const sectionIds = siteConfig.nav.map((item) => item.href.replace("#", ""));
