import {
  periciaTypes,
  segments,
  complementaryServices,
  advisoryServices,
} from "@/lib/content";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { Process } from "@/components/sections/Process";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <ServiceGrid
        id="pericias"
        eyebrow="Especialidades"
        title="Tipos de perícias"
        description="Atuação técnica em demandas que exigem prova contábil especializada, com metodologia adequada a cada objeto pericial."
        items={periciaTypes}
        columns={3}
      />
      <ServiceGrid
        id="atuacao"
        eyebrow="Onde atuamos"
        title="Segmentos de atuação"
        description="Experiência em diferentes ritos processuais, além de procedimentos extrajudiciais e arbitragem."
        items={segments}
        columns={2}
        dark
      />
      <ServiceGrid
        id="servicos"
        eyebrow="Entregas técnicas"
        title="Serviços complementares de perícia"
        description="Suporte completo à instrução processual e à defesa técnica das partes."
        items={complementaryServices}
        columns={2}
      />
      <ServiceGrid
        id="assessoria"
        eyebrow="Contabilidade e finanças"
        title="Assessoria contábil e financeira"
        description="Serviços especializados que complementam a atuação pericial e a organização documental para demandas judiciais."
        items={advisoryServices}
        columns={2}
        dark
      />
      <Process />
      <Faq />
      <Contact />
    </>
  );
}
