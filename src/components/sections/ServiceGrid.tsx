import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type ServiceGridProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: readonly string[];
  columns?: 2 | 3;
  dark?: boolean;
};

export function ServiceGrid({
  id,
  eyebrow,
  title,
  description,
  items,
  columns = 3,
  dark = false,
}: ServiceGridProps) {
  const colClass =
    columns === 2
      ? "sm:grid-cols-2"
      : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section
      id={id}
      className={`section-pad ${dark ? "bg-[var(--color-navy-900)]" : "bg-[var(--color-surface-muted)]"}`}
      aria-labelledby={`${id}-title`}
    >
      <Container mobileCenter>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          titleId={`${id}-title`}
          light={dark}
        />
        <ul className={`grid gap-[var(--space-sm)] ${colClass}`}>
          {items.map((item) => (
            <li
              key={item}
              className={`group flex gap-3 rounded-[var(--radius-md)] p-[var(--space-sm)] transition-colors max-lg:flex-col max-lg:items-center max-lg:text-center ${
                dark
                  ? "bg-white/5 hover:bg-white/10"
                  : "card-surface hover:border-[var(--color-blue-500)]/30"
              }`}
            >
              <span
                className={`mt-1.5 h-2 w-2 shrink-0 rounded-full max-lg:mt-0 ${
                  dark ? "bg-[var(--color-blue-400)]" : "bg-[var(--color-blue-500)]"
                }`}
                aria-hidden
              />
              <span
                className={`text-small font-medium ${
                  dark ? "text-blue-50" : "text-[var(--color-navy-900)]"
                }`}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
