import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/layout/SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();
  const whatsappMessage = encodeURIComponent(
    "Olá, Sara. Gostaria de informações sobre perícia contábil / assistência técnica.",
  );
  const whatsappHref = `https://wa.me/${siteConfig.phone.replace(/\D/g, "")}?text=${whatsappMessage}`;

  return (
    <footer className="bg-[var(--color-navy-950)] text-white">
      <Container className="section-pad !pb-[var(--space-lg)]">
        <div className="grid gap-[var(--space-lg)] md:grid-cols-2 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.75fr)_minmax(16rem,1.35fr)]">
          <div>
            <Image
              src="/images/logo-sara-rapouso.png"
              alt={`${siteConfig.name} — logotipo`}
              width={220}
              height={88}
              className="mb-4 h-14 w-auto sm:h-16"
            />
            <p className="mt-1 text-small text-blue-200/80">{siteConfig.role}</p>
            <p className="mt-4 max-w-md text-small text-blue-100/70">
              {siteConfig.description}
            </p>
            <div className="mt-[var(--space-md)]">
              <h3 className="text-caption mb-3 text-blue-300">Redes sociais</h3>
              <SocialLinks />
            </div>
          </div>

          <div>
            <h3 className="text-caption mb-4 text-blue-300">Navegação</h3>
            <ul className="space-y-2 text-small">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-blue-100/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <h3 className="text-caption mb-4 text-blue-300">Contato</h3>
            <ul className="space-y-3 text-small text-blue-100/90">
              <li>
                <span className="block text-blue-300/70">Registros</span>
                {siteConfig.crc}
                <br />
                {siteConfig.cnpc}
              </li>
              <li>
                <span className="block text-blue-300/70">Telefone</span>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="hover:text-white"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <span className="block text-blue-300/70">E-mail</span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-block whitespace-nowrap hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <span className="block text-blue-300/70">Região</span>
                {siteConfig.region} · Brasil
              </li>
            </ul>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-[var(--radius-md)] bg-[var(--color-blue-500)] px-5 py-2.5 text-small font-medium text-white transition-colors hover:bg-[var(--color-blue-400)]"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-[var(--space-lg)] flex flex-col gap-2 border-t border-white/10 pt-[var(--space-md)] text-caption text-blue-200/60 sm:flex-row sm:justify-between">
          <p>
            © {year} {siteConfig.legalName}. Todos os direitos reservados.
          </p>
          <p>
            Contadora e Perita Contábil · {siteConfig.crc} · {siteConfig.cnpc}
          </p>
        </div>
      </Container>
    </footer>
  );
}
