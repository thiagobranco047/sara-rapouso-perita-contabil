import { processSteps } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process() {
  return (
    <section
      id="metodologia"
      className="section-pad bg-white"
      aria-labelledby="process-title"
    >
      <Container mobileCenter>
        <SectionHeading
          eyebrow="Como trabalhamos"
          title="Metodologia pericial"
          description="Processo estruturado para garantir clareza técnica, rastreabilidade e suporte à decisão judicial ou à composição entre as partes."
          align="center"
          titleId="process-title"
        />
        <ol className="grid gap-[var(--space-md)] md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <li
              key={step.step}
              className="relative card-surface p-[var(--space-md)] max-lg:text-center"
            >
              <span className="font-serif text-4xl font-semibold leading-none text-[var(--color-blue-100)]">
                {step.step}
              </span>
              <h3 className="text-h3 mt-2 text-[var(--color-navy-900)]">
                {step.title}
              </h3>
              <p className="text-description mt-2">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
