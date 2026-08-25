import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  const whatsappMessage = encodeURIComponent(
    "Olá, Sara. Gostaria de solicitar informações sobre perícia contábil.",
  );
  const whatsappHref = `https://wa.me/${siteConfig.phone.replace(/\D/g, "")}?text=${whatsappMessage}`;
  const mailSubject = encodeURIComponent("Contato — Perícia Contábil");
  const mailBody = encodeURIComponent(
    "Olá,\n\nGostaria de informações sobre:\n\n[Descreva brevemente a demanda]\n\nAtenciosamente,",
  );
  const mailto = `mailto:${siteConfig.email}?subject=${mailSubject}&body=${mailBody}`;

  return (
    <section
      id="contato"
      className="section-pad bg-[var(--color-navy-900)] text-white"
      aria-labelledby="contact-title"
    >
      <Container mobileCenter>
        <div className="grid w-full gap-[var(--space-lg)] max-lg:items-center lg:grid-cols-2 lg:items-center lg:text-left">
          <div>
            <SectionHeading
              eyebrow="Fale conosco"
              title="Solicite atendimento"
              description="Entre em contato para análise inicial da demanda pericial, assistência técnica ou assessoria contábil-financeira."
              light
              titleId="contact-title"
            />
            <address className="not-italic max-lg:text-center">
              <ul className="space-y-[var(--space-sm)]">
                <li>
                  <p className="text-caption text-blue-300">Profissional</p>
                  <p className="text-base font-semibold leading-[var(--leading-subheading)]">{siteConfig.name}</p>
                  <p className="text-small text-blue-100/80">{siteConfig.role}</p>
                </li>
                <li>
                  <p className="text-caption text-blue-300">Registros</p>
                  <p className="text-small">{siteConfig.crc}</p>
                  <p className="text-small">{siteConfig.cnpc}</p>
                </li>
                <li>
                  <p className="text-caption text-blue-300">Telefone / WhatsApp</p>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-base leading-[var(--leading-subheading)] hover:text-blue-200"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </li>
                <li>
                  <p className="text-caption text-blue-300">E-mail</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="break-all text-small hover:text-blue-200"
                  >
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <p className="text-caption text-blue-300">Área de atuação</p>
                  <p className="text-small text-blue-100/90">
                    {siteConfig.region} e todo o Brasil — judicial e extrajudicial
                  </p>
                </li>
              </ul>
            </address>
          </div>

          <div className="card-surface w-full max-w-md !border-white/10 bg-white p-[var(--space-lg)] !text-[var(--color-ink)] max-lg:mx-auto lg:max-w-none">
            <h3 className="text-h3 mb-2 text-[var(--color-navy-900)]">
              Canais de contato
            </h3>
            <p className="mb-[var(--space-md)] text-small text-[var(--color-muted)]">
              Escolha o canal mais conveniente. Para demandas judiciais, indique
              número do processo, vara e objeto da perícia, se disponíveis.
            </p>
            <div className="flex flex-col items-center gap-[var(--space-sm)] max-lg:items-stretch lg:items-start">
              <Button href={whatsappHref} external className="w-full justify-center">
                WhatsApp
              </Button>
              <Button
                href={mailto}
                external
                variant="secondary"
                className="w-full justify-center"
              >
                E-mail
              </Button>
              <Button
                href={`tel:${siteConfig.phone}`}
                external
                variant="ghost"
                className="w-full justify-center"
              >
                Ligar agora
              </Button>
            </div>
            <p className="mt-[var(--space-md)] text-caption text-[var(--color-muted)]">
              Resposta em horário comercial. Urgências judiciais: informe prazo
              processual na mensagem.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
