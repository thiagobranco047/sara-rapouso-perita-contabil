type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  titleId?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  titleId,
}: SectionHeadingProps) {
  const alignClass =
    align === "center"
      ? "text-center mx-auto"
      : "max-lg:text-center max-lg:mx-auto lg:text-left lg:mx-0";
  const descMax = "max-w-2xl max-lg:mx-auto lg:mx-0";

  return (
    <header className={`mb-[var(--space-md)] ${alignClass}`}>
      {eyebrow ? (
        <p
          className={`text-caption mb-[var(--space-2xs)] ${
            light ? "text-blue-200" : "text-[var(--color-blue-600)]"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={titleId}
        className={`text-h2 mb-[var(--space-2xs)] ${
          light ? "text-white" : "text-[var(--color-navy-900)]"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`text-description ${descMax} ${
            light ? "text-description-inverse" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
