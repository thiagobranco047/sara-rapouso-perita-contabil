import Image from "next/image";
import { heroContent } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] overflow-x-hidden pt-[var(--header-height)]"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/bg-geometric.png"
          alt=""
          fill
          priority
          className="object-cover object-right-top opacity-90"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/40 max-lg:bg-gradient-to-b max-lg:from-white max-lg:via-white/95 max-lg:to-white/70" />
      </div>

      <Container className="grid min-h-[calc(100dvh-var(--header-height))] items-center gap-[var(--space-lg)] py-[var(--space-lg)] max-lg:flex max-lg:flex-col max-lg:items-center max-lg:text-center lg:grid-cols-2 lg:gap-[var(--space-xl)] lg:text-left">
        <div className="w-full max-w-xl max-lg:max-w-none lg:max-w-xl">
          <p className="text-caption mb-[var(--space-2xs)] text-[var(--color-blue-600)]">
            {heroContent.eyebrow}
          </p>
          <h1
            id="hero-heading"
            className="text-display mb-[var(--space-2xs)] leading-[1em] text-[var(--color-navy-900)]"
          >
            {heroContent.headline}
          </h1>
          <p className="text-description mx-auto mb-[var(--space-lg)] max-w-lg pb-[var(--space-lg)] max-lg:mx-auto">
            {heroContent.subheadline}
          </p>
          <div className="flex flex-wrap justify-center gap-[var(--space-sm)] lg:justify-start">
            <Button href="#contato">{heroContent.ctaPrimary}</Button>
            <Button href="#pericias" variant="secondary">
              {heroContent.ctaSecondary}
            </Button>
          </div>
          <dl className="mt-[var(--space-lg)] grid grid-cols-2 justify-items-center gap-[var(--space-sm)] border-t border-[var(--color-navy-900)]/10 pt-[var(--space-md)] text-center sm:grid-cols-3 lg:justify-items-start lg:text-left">
            <div>
              <dt className="text-caption text-[var(--color-muted)]">Registro</dt>
              <dd className="text-small font-medium text-[var(--color-navy-900)]">
                {siteConfig.crc}
              </dd>
              <dd className="text-small font-medium text-[var(--color-navy-900)]">
                {siteConfig.cnpc}
              </dd>
            </div>
            <div>
              <dt className="text-caption text-[var(--color-muted)]">Atuação</dt>
              <dd className="text-small font-medium text-[var(--color-navy-900)]">
                Judicial e extrajudicial
              </dd>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <dt className="text-caption text-[var(--color-muted)]">Atuação</dt>
              <dd className="text-small font-medium text-[var(--color-navy-900)]">
                Todo o território nacional
              </dd>
            </div>
          </dl>
        </div>

        <div className="image-full-bleed relative w-full lg:mx-auto lg:max-w-none">
          <div className="relative aspect-[4/5] w-full overflow-hidden shadow-[var(--shadow-card)] max-lg:rounded-none lg:rounded-[var(--radius-lg)]">
            <Image
              src="/images/sara-rapouso-01.png"
              alt={`${siteConfig.name}, ${siteConfig.role}`}
              fill
              priority
              className="object-cover object-top"
              sizes="100vw"
            />
          </div>
          <div
            className="absolute -bottom-4 -left-4 hidden rounded-[var(--radius-md)] bg-[var(--color-navy-900)] px-5 py-4 text-white shadow-[var(--shadow-card)] lg:block"
            aria-hidden
          >
            <p className="font-serif text-3xl font-semibold leading-none">SR</p>
            <p className="mt-1 text-caption text-blue-200">Perita Contábil</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
