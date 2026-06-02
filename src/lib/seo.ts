import type { Metadata } from "next";
import { siteConfig } from "./site";

export function createMetadata(): Metadata {
  const { url, title, description, keywords, locale, language, geo } = siteConfig;

  return {
    metadataBase: new URL(url),
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    keywords: [...keywords],
    authors: [{ name: siteConfig.name, url }],
    creator: siteConfig.name,
    publisher: siteConfig.legalName,
    category: "Serviços profissionais",
    alternates: {
      canonical: "/",
      languages: { [language]: "/" },
    },
    openGraph: {
      type: "website",
      locale,
      url,
      siteName: siteConfig.legalName,
      title,
      description,
      images: [
        {
          url: "/images/sara-rapouso-01.png",
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${siteConfig.role}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/sara-rapouso-01.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    other: {
      "geo.region": geo.region,
      "geo.placename": geo.placename,
      "geo.position": geo.position,
      ICBM: geo.icbm,
    },
  };
}

export function jsonLdGraph() {
  const { url, name, legalName, description, email, phone, crc, role, region, geo } =
    siteConfig;

  const professionalService = {
    "@type": "ProfessionalService",
    "@id": `${url}/#organization`,
    name: legalName,
    alternateName: name,
    description,
    url,
    email,
    telephone: phone,
    image: `${url}/images/logo-sr.png`,
    logo: `${url}/images/logo-sr.png`,
    areaServed: [
      { "@type": "State", name: region },
      { "@type": "Country", name: "Brasil" },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.position.split(";")[0],
      longitude: geo.position.split(";")[1],
    },
    serviceType: [
      "Perícia contábil judicial",
      "Perícia contábil extrajudicial",
      "Laudo pericial contábil",
      "Assistência técnica contábil",
      "Cálculos judiciais",
    ],
    knowsAbout: siteConfig.keywords,
  };

  const person = {
    "@type": "Person",
    "@id": `${url}/#person`,
    name,
    jobTitle: role,
    description,
    email,
    telephone: phone,
    image: `${url}/images/sara-rapouso-01.png`,
    worksFor: { "@id": `${url}/#organization` },
    identifier: {
      "@type": "PropertyValue",
      name: "CRC SC",
      value: crc.replace("CRC SC - ", ""),
    },
    areaServed: region,
    sameAs: siteConfig.social.map((s) => s.href),
  };

  const webSite = {
    "@type": "WebSite",
    "@id": `${url}/#website`,
    url,
    name: siteConfig.title,
    description,
    inLanguage: siteConfig.language,
    publisher: { "@id": `${url}/#organization` },
  };

  const webPage = {
    "@type": "WebPage",
    "@id": `${url}/#webpage`,
    url,
    name: siteConfig.title,
    description,
    isPartOf: { "@id": `${url}/#website` },
    about: { "@id": `${url}/#person` },
    inLanguage: siteConfig.language,
  };

  const faq = {
    "@type": "FAQPage",
    "@id": `${url}/#faq`,
    mainEntity: faqMainEntity(),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [professionalService, person, webSite, webPage, faq],
  };
}

function faqMainEntity() {
  // Imported lazily to avoid circular deps — duplicate minimal FAQ for schema
  const items = [
    {
      q: "Qual a diferença entre perícia judicial e extrajudicial?",
      a: "Na perícia judicial, o trabalho é conduzido no âmbito de um processo. Na extrajudicial, a prova técnica é produzida para composição ou instrução prévia, sem processo em curso.",
    },
    {
      q: "A perita atua em outras unidades federativas?",
      a: "Sim. A atuação pericial pode ser realizada em todo o território nacional, conforme a natureza da demanda.",
    },
  ];

  return items.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  }));
}
