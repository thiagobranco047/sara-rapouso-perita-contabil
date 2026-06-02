import Image from "next/image";
import { aboutContent } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="sobre" className="section-pad geo-accent" aria-labelledby="about-title">
      <Container mobileCenter>
        <div className="grid w-full items-center gap-[var(--space-lg)] max-lg:flex max-lg:flex-col max-lg:items-center lg:grid-cols-2">
          <div className="image-full-bleed relative order-2 w-full lg:order-1">
            <div className="relative aspect-[4/5] w-full overflow-hidden shadow-[var(--shadow-card)] max-lg:rounded-none lg:max-w-md lg:rounded-[var(--radius-lg)]">
              <Image
                src="/images/sara-rapouso-frente.webp"
                alt="Sara Rapouso em ambiente profissional"
                fill
                className="object-cover object-top"
                sizes="100vw"
              />
            </div>
          </div>

          <div className="order-1 flex w-full flex-col items-center lg:order-2 lg:items-start">
            <SectionHeading
              eyebrow="Quem sou"
              title={aboutContent.title}
              titleId="about-title"
            />
            <div className="w-full max-w-2xl space-y-[var(--space-2xs)]">
              {aboutContent.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-description">
                  {paragraph}
                </p>
              ))}
            </div>
            <ul className="mt-[var(--space-md)] grid w-full max-w-xl gap-[var(--space-sm)] sm:grid-cols-2 lg:max-w-none">
              {aboutContent.highlights.map((item) => (
                <li
                  key={item.label}
                  className="card-surface w-full p-[var(--space-sm)] text-center lg:text-left"
                >
                  <p className="text-caption text-[var(--color-blue-600)]">
                    {item.label}
                  </p>
                  <p className="mt-1 text-small font-medium text-[var(--color-navy-900)]">
                    {item.value}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
