import { type ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  as?: "div" | "section" | "header" | "footer" | "nav";
  className?: string;
  id?: string;
  /** Centraliza texto e filhos abaixo de 1024px */
  mobileCenter?: boolean;
};

export function Container({
  children,
  as: Tag = "div",
  className = "",
  id,
  mobileCenter = false,
}: ContainerProps) {
  const mobileCenterClass = mobileCenter
    ? "max-lg:flex max-lg:flex-col max-lg:items-center max-lg:text-center"
    : "";

  return (
    <Tag
      id={id}
      className={`container-site ${mobileCenterClass} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
