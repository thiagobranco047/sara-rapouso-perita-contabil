import { faqItems } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Faq() {
  return (
    <section
      id="faq"
      className="section-pad geo-accent"
      aria-labelledby="faq-title"
    >
      <Container className="max-w-3xl" mobileCenter>
        <SectionHeading
          eyebrow="Dúvidas frequentes"
          title="Perguntas comuns"
          align="center"
          titleId="faq-title"
        />
        <div className="space-y-[var(--space-2xs)]">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group card-surface overflow-hidden"
            >
              <summary className="cursor-pointer list-none px-[var(--space-md)] py-[var(--space-sm)] text-small font-medium text-[var(--color-navy-900)] marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.question}
                  <span
                    className="text-[var(--color-blue-500)] transition-transform group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </span>
              </summary>
              <div className="border-t border-[var(--color-navy-900)]/8 px-[var(--space-md)] pb-[var(--space-sm)] pt-0">
                <p className="text-small text-[var(--color-muted)]">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
